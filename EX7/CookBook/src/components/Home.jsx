import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // --- 1. MEAL ROULETTE DATA & STATE ---
  const rouletteDishes = [
    { title: 'Paneer Butter Masala', time: '30 mins', emoji: '🧀', vibe: 'Creamy & Rich' },
    { title: 'Chicken Tikka Masala', time: '40 mins', emoji: '🍗', vibe: 'Smoky & Spicy' },
    { title: 'Vegetable Biryani', time: '45 mins', emoji: '🍚', vibe: 'Aromatic & Regal' },
    { title: 'Dal Makhani', time: '35 mins', emoji: '🍲', vibe: 'Comforting & Buttery' },
    { title: 'Aloo Gobi', time: '25 mins', emoji: '🥔', vibe: 'Homestyle Flavor' },
    { title: 'Palak Paneer', time: '30 mins', emoji: '🥬', vibe: 'Healthy & Vibrant' }
  ];
  const [randomDish, setRandomDish] = useState(rouletteDishes[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinRoulette = () => {
    setIsSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * rouletteDishes.length);
      setRandomDish(rouletteDishes[randomIndex]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  // --- 2. FRIDGE PANTRY MATCH DATA & STATE ---
  const [selectedPantry, setSelectedPantry] = useState(['Paneer']);
  const pantryItems = ['Paneer', 'Chicken', 'Potato', 'Spinach', 'Rice', 'Tomato'];

  const recipeDatabase = [
    { name: 'Paneer Butter Masala', ingredients: ['Paneer', 'Tomato'], emoji: '🧀' },
    { name: 'Palak Paneer', ingredients: ['Paneer', 'Spinach'], emoji: '🥬' },
    { name: 'Chicken Tikka Masala', ingredients: ['Chicken', 'Tomato'], emoji: '🍗' },
    { name: 'Aloo Gobi', ingredients: ['Potato', 'Tomato'], emoji: '🥔' },
    { name: 'Vegetable Biryani', ingredients: ['Rice', 'Potato'], emoji: '🍚' },
    { name: 'Jeera Rice & Gravy', ingredients: ['Rice'], emoji: '🍛' }
  ];

  const suggestedDishes = recipeDatabase.filter(recipe =>
    recipe.ingredients.some(ing => selectedPantry.includes(ing))
  );

  const togglePantry = (item) => {
    setSelectedPantry(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  // --- 3. SPICE BOX (MASALA DABBA) DATA & STATE ---
  const spices = [
    { name: 'Turmeric (Haldi)', emoji: '🟡', benefit: 'Anti-inflammatory & boosts immunity', dish: 'Golden Milk & Dal' },
    { name: 'Cardamom (Elaichi)', emoji: '🟢', benefit: 'Aids digestion & freshens breath', dish: 'Masala Chai & Kheer' },
    { name: 'Cumin (Jeera)', emoji: '🟤', benefit: 'Stimulates digestive enzymes', dish: 'Jeera Rice & Tadka' },
    { name: 'Ginger (Adrak)', emoji: '🫚', benefit: 'Relieves nausea & gut bloating', dish: 'Adrak Chai & Gravies' }
  ];
  const [selectedSpice, setSelectedSpice] = useState(spices[0]);

  // --- 4. FOOD MOOD MATCHER DATA & STATE ---
  const moodCategories = [
    { mood: '🧸 Comfort', dishes: ['Dal Makhani', 'Khichdi', 'Rajma Chawal'] },
    { mood: '🌶️ Craving Spice', dishes: ['Chicken Tikka', 'Chana Masala', 'Vada Pav'] },
    { mood: '⚡ Quick Prep', dishes: ['Egg Bhurji', 'Paneer Stir-fry', 'Poha'] },
    { mood: '🍨 Sweet Tooth', dishes: ['Gulab Jamun', 'Rasmalai', 'Gajar Halwa'] }
  ];
  const [selectedMood, setSelectedMood] = useState(moodCategories[0]);

  // --- 5. GUT-HEALTHY FOODS DATA ---
  const gutHealthyFoods = [
    { name: 'Curd Rice (Dahi Chawal)', benefit: 'Rich in natural probiotics for gut flora 🥣' },
    { name: 'Moong Dal Khichdi', benefit: 'Easy to digest & soothing for stomach 🍲' },
    { name: 'Fermented Idli / Dosa', benefit: 'Fermentation boosts nutrient absorption 🥞' },
    { name: 'Palak Saag (Spinach)', benefit: 'High fiber to feed healthy gut bacteria 🥬' }
  ];

  // --- 6. KITCHEN TIMER LOGIC ---
  const [timeLeft, setTimeLeft] = useState(180); // Default 3 mins (Chai)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert('⏰ Time is up! Your dish or tea is ready!');
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const startPreset = (seconds) => {
    setIsRunning(false);
    setTimeLeft(seconds);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      
      {/* ================= SECTION 1: ROULETTE & FRIDGE MATCH ================= */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* WIDGET 1: MEAL ROULETTE */}
        <div 
          style={{ 
            flex: '1', 
            minWidth: '290px', 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '22px',
            textAlign: 'center',
            border: '2px solid #ffd1dc',
            boxShadow: '0 8px 20px rgba(216, 112, 147, 0.12)'
          }}
        >
          <div style={{ display: 'inline-block', backgroundColor: '#fff0f3', color: '#d87093', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
            ✨ WHAT TO COOK TODAY?
          </div>
          <h3 style={{ color: '#8b3a52', margin: '0 0 12px 0', fontSize: '18px' }}>Meal Roulette 🎲</h3>

          <div 
            style={{ 
              backgroundColor: '#fff0f3', 
              padding: '15px', 
              borderRadius: '18px', 
              marginBottom: '15px',
              border: '2px dashed #f4acb7',
              transform: isSpinning ? 'scale(0.98)' : 'scale(1)',
              transition: 'transform 0.1s'
            }}
          >
            <div style={{ fontSize: '42px', marginBottom: '4px', filter: isSpinning ? 'blur(1px)' : 'none' }}>
              {randomDish.emoji}
            </div>
            <h4 style={{ color: '#8b3a52', margin: '4px 0', fontSize: '16px', fontWeight: 'bold' }}>
              {randomDish.title}
            </h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '6px' }}>
              <span style={{ backgroundColor: '#ffffff', color: '#c25975', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>
                ⏱️ {randomDish.time}
              </span>
              <span style={{ backgroundColor: '#ffffff', color: '#c25975', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>
                💖 {randomDish.vibe}
              </span>
            </div>
          </div>

          <button 
            onClick={spinRoulette}
            disabled={isSpinning}
            style={{
              backgroundColor: isSpinning ? '#e0a8b8' : '#d87093',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: isSpinning ? 'default' : 'pointer',
              fontSize: '13px',
              boxShadow: '0 4px 12px rgba(216, 112, 147, 0.3)'
            }}
          >
            {isSpinning ? 'Spinning...' : 'SPIN THE WHEEL 🔄'}
          </button>
        </div>

        {/* WIDGET 2: FRIDGE PANTRY MATCH */}
        <div 
          style={{ 
            flex: '1.2', 
            minWidth: '290px', 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '22px',
            border: '2px solid #ffd1dc',
            boxShadow: '0 8px 20px rgba(216, 112, 147, 0.12)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#fff0f3', color: '#d87093', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
              🧺 PANTRY MATCH
            </div>
            <h3 style={{ color: '#8b3a52', margin: '0 0 10px 0', fontSize: '18px' }}>What's in Your Fridge?</h3>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '12px' }}>
            {pantryItems.map((item) => {
              const selected = selectedPantry.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => togglePantry(item)}
                  style={{
                    backgroundColor: selected ? '#d87093' : '#fff0f3',
                    color: selected ? '#ffffff' : '#c25975',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}
                >
                  {selected ? `✓ ${item}` : `+ ${item}`}
                </button>
              );
            })}
          </div>

          <div style={{ flex: '1', backgroundColor: '#fff0f3', borderRadius: '14px', padding: '10px 12px' }}>
            <span style={{ fontSize: '11px', color: '#a0405d', fontWeight: 'bold', display: 'block', marginBottom: '6px', textAlign: 'center' }}>
              SUGGESTED DISHES ({suggestedDishes.length})
            </span>

            {suggestedDishes.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '130px', overflowY: 'auto' }}>
                {suggestedDishes.map((dish, i) => (
                  <div 
                    key={i}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid #ffe4e1'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '16px' }}>{dish.emoji}</span>
                      <span style={{ color: '#8b3a52', fontSize: '12px', fontWeight: 'bold' }}>{dish.name}</span>
                    </div>
                    <Link to="/recipes" style={{ color: '#d87093', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', backgroundColor: '#fff0f3', padding: '2px 6px', borderRadius: '6px' }}>
                      Cook ➔
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#aaa', fontSize: '11px', textAlign: 'center', margin: '15px 0' }}>
                Tap ingredients above to unlock dish suggestions!
              </p>
            )}
          </div>
        </div>

      </div>


      {/* ================= SECTION 2: TIMER & FOOD MOOD ================= */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* WIDGET 3: KITCHEN TIMER */}
        <div 
          style={{ 
            flex: '1', 
            minWidth: '280px', 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '22px',
            border: '2px solid #ffd1dc',
            boxShadow: '0 8px 20px rgba(216, 112, 147, 0.12)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'inline-block', backgroundColor: '#fff0f3', color: '#d87093', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
            ⏱️ KITCHEN HELPER
          </div>
          <h3 style={{ color: '#8b3a52', margin: '0 0 6px 0', fontSize: '18px' }}>Tea & Cooking Timer</h3>

          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#c25975', margin: '2px 0' }}>
            {formatTime(timeLeft)}
          </div>

          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '10px' }}>
            <button onClick={() => startPreset(180)} style={presetBtnStyle}>☕ Chai (3m)</button>
            <button onClick={() => startPreset(120)} style={presetBtnStyle}>🍜 Maggi (2m)</button>
            <button onClick={() => startPreset(480)} style={presetBtnStyle}>🥚 Egg (8m)</button>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <button 
              onClick={() => setIsRunning(!isRunning)} 
              style={{ ...actionBtnStyle, backgroundColor: isRunning ? '#e0a8b8' : '#d87093' }}
            >
              {isRunning ? 'Pause' : 'Start Timer'}
            </button>
            <button onClick={() => { setIsRunning(false); setTimeLeft(180); }} style={resetBtnStyle}>
              Reset
            </button>
          </div>
        </div>

        {/* WIDGET 4: FOOD MOOD MATCHER */}
        <div 
          style={{ 
            flex: '1.2', 
            minWidth: '290px', 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '22px',
            border: '2px solid #ffd1dc',
            boxShadow: '0 8px 20px rgba(216, 112, 147, 0.12)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#fff0f3', color: '#d87093', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
              🌶️ FLAVOR MATCHER
            </div>
            <h3 style={{ color: '#8b3a52', margin: '0 0 10px 0', fontSize: '18px' }}>What's Your Food Mood?</h3>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '12px' }}>
            {moodCategories.map((item) => (
              <button
                key={item.mood}
                onClick={() => setSelectedMood(item)}
                style={{
                  backgroundColor: selectedMood.mood === item.mood ? '#d87093' : '#fff0f3',
                  color: selectedMood.mood === item.mood ? '#ffffff' : '#c25975',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 'bold'
                }}
              >
                {item.mood}
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#fff0f3', padding: '10px 12px', borderRadius: '12px', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', color: '#a0405d', fontWeight: 'bold' }}>MATCHED DISHES FOR YOU:</span>
            <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
              {selectedMood.dishes.map((dish, i) => (
                <span key={i} style={{ backgroundColor: '#ffffff', color: '#8b3a52', padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold', border: '1px solid #ffe4e1' }}>
                  ✨ {dish}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>


      {/* ================= SECTION 3: MASALA DABBA & GUT HEALTH ================= */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

        {/* WIDGET 5: INTERACTIVE MASALA DABBA */}
        <div 
          style={{ 
            flex: '1.2', 
            minWidth: '290px', 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '22px',
            border: '2px solid #ffd1dc',
            boxShadow: '0 8px 20px rgba(216, 112, 147, 0.12)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#fff0f3', color: '#d87093', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
              🌿 SPICE BOX
            </div>
            <h3 style={{ color: '#8b3a52', margin: '0 0 10px 0', fontSize: '18px' }}>Interactive Masala Dabba</h3>
          </div>

          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '12px' }}>
            {spices.map((spice) => (
              <button
                key={spice.name}
                onClick={() => setSelectedSpice(spice)}
                style={{
                  backgroundColor: selectedSpice.name === spice.name ? '#fff0f3' : '#ffffff',
                  border: selectedSpice.name === spice.name ? '2px solid #d87093' : '1px solid #ffe4e1',
                  borderRadius: '14px',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '20px' }}>{spice.emoji}</div>
                <div style={{ fontSize: '10px', color: '#8b3a52', fontWeight: 'bold' }}>{spice.name.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#fff0f3', padding: '10px 12px', borderRadius: '12px' }}>
            <h4 style={{ color: '#8b3a52', margin: '0 0 3px 0', fontSize: '13px' }}>{selectedSpice.emoji} {selectedSpice.name}</h4>
            <p style={{ color: '#555', fontSize: '11px', margin: '0 0 2px 0' }}><strong>Benefit:</strong> {selectedSpice.benefit}</p>
            <p style={{ color: '#555', fontSize: '11px', margin: 0 }}><strong>Best in:</strong> {selectedSpice.dish}</p>
          </div>
        </div>

        {/* WIDGET 6: GUT HEALTHY RECIPES */}
        <div 
          style={{ 
            flex: '1', 
            minWidth: '280px', 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '22px',
            border: '2px solid #ffd1dc',
            boxShadow: '0 8px 20px rgba(216, 112, 147, 0.12)'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#fff0f3', color: '#d87093', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
              🦠 GUT HEALTH
            </div>
            <h3 style={{ color: '#8b3a52', margin: '0 0 10px 0', fontSize: '18px' }}>Gut-Soothing Foods</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {gutHealthyFoods.map((food, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#fff0f3',
                  padding: '6px 10px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ color: '#8b3a52', fontSize: '11px', fontWeight: 'bold' }}>{food.name}</div>
                  <div style={{ color: '#666', fontSize: '10px' }}>{food.benefit}</div>
                </div>
                <Link to="/recipes" style={{ color: '#d87093', fontSize: '10px', fontWeight: 'bold', textDecoration: 'none' }}>
                  Explore ➔
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

// Button Styling Helpers
const presetBtnStyle = {
  backgroundColor: '#fff0f3',
  color: '#c25975',
  border: '1px solid #ffd1dc',
  padding: '4px 8px',
  borderRadius: '8px',
  fontSize: '11px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const actionBtnStyle = {
  color: '#ffffff',
  border: 'none',
  padding: '6px 16px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const resetBtnStyle = {
  backgroundColor: '#fff0f3',
  color: '#8b3a52',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Home;