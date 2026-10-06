import { Component, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  emoji: string;
}

@Component({
  selector: 'app-get-apiex',
  standalone: true,
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css'
})
export class GetAPIEx {

  http = inject(HttpClient);

  menuItems  = signal<MenuItem[]>([]);
  loading    = signal<boolean>(true);
  error      = signal<string>('');
  activeTab  = signal<string>('All');

  // Map TheMealDB categories to cafe-friendly ones
  categoryMap: Record<string, { label: string; emoji: string }> = {
    'Breakfast': { label: 'Breakfast', emoji: '🍳' },
    'Dessert':   { label: 'Desserts',  emoji: '🍰' },
    'Side':      { label: 'Snacks',    emoji: '🥪' },
    'Pasta':     { label: 'Mains',     emoji: '🍝' },
    'Seafood':   { label: 'Mains',     emoji: '🍝' },
  };

  // Hardcoded cafe prices per category
  prices: Record<string, number> = {
    'Breakfast': 120,
    'Dessert':   90,
    'Side':      75,
    'Pasta':     180,
    'Seafood':   220,
  };

  emojis: Record<string, string> = {
    'Breakfast': '🍳',
    'Dessert':   '🍰',
    'Side':      '🥪',
    'Pasta':     '🍝',
    'Seafood':   '🐟',
  };

  tabs = computed(() => {
    const cats = ['All', ...new Set(this.menuItems().map(i => i.category))];
    return cats;
  });

  filtered = computed(() => {
    const tab = this.activeTab();
    return tab === 'All'
      ? this.menuItems()
      : this.menuItems().filter(i => i.category === tab);
  });

  constructor() {
    this.loadMenu();
  }

  loadMenu() {
    // TheMealDB — free, no API key needed
    const categories = ['Breakfast', 'Dessert', 'Side', 'Pasta', 'Seafood'];
    const fetches = categories.map(cat =>
      this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    );

    let completed = 0;
    const allItems: MenuItem[] = [];

    fetches.forEach((fetch$, idx) => {
      const cat = categories[idx];
      fetch$.subscribe({
        next: (res) => {
          const meals: MenuItem[] = (res.meals || []).slice(0, 3).map((m: any) => ({
            id:          m.idMeal,
            name:        m.strMeal,
            category:    cat,
            price:       this.prices[cat] + Math.floor(Math.random() * 30),
            description: `A delicious ${cat.toLowerCase()} item`,
            emoji:       this.emojis[cat],
          }));
          allItems.push(...meals);
          completed++;
          if (completed === categories.length) {
            this.menuItems.set(allItems);
            this.loading.set(false);
          }
        },
        error: () => {
          completed++;
          if (completed === categories.length) {
            if (allItems.length > 0) {
              this.menuItems.set(allItems);
            } else {
              this.error.set('Could not load menu. Please try again.');
            }
            this.loading.set(false);
          }
        }
      });
    });
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
  }
}
