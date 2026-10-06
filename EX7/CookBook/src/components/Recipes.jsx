import React, { useState, useEffect } from 'react';
import Menu from './Menu';

function Recipes() {
  // ⚠️ REPLACE THIS WITH YOUR ACTUAL SPOONACULAR API KEY
  const API_KEY = '96d038af5360490184b3cfd7f8888f10';

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // 1. Fetch Indian recipes on page load
  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=Indian&number=12`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching recipes:', err);
        setLoading(false);
      });
  }, [API_KEY]);

  // 2. Fetch detailed information when a recipe card is clicked
  const handleSelectRecipe = (id) => {
    setDetailsLoading(true);
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedRecipe(data);
        setDetailsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching details:', err);
        setDetailsLoading(false);
      });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #ffe4e1' }}>
      <h2 style={{ color: '#c25975', marginTop: 0, textAlign: 'center' }}>Indian Recipes</h2>

      {/* Main Grid Loading State */}
      {loading ? (
        <p style={{ textAlign: 'center', color: '#8b3a52' }}>Fetching Indian recipes from Spoonacular...</p>
      ) : (
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {recipes.map((item) => (
            <Menu
              key={item.id}
              name={item.title}
              image={item.image}
              onSelect={() => handleSelectRecipe(item.id)}
            />
          ))}
        </div>
      )}

      {/* Recipe Details Fetching Indicator */}
      {detailsLoading && (
        <p style={{ textAlign: 'center', color: '#c25975', marginTop: '20px' }}>
          Loading recipe details...
        </p>
      )}

      {/* --- CUTE & PERFECTLY ROUNDED MODAL WINDOW --- */}
      {selectedRecipe && !detailsLoading && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setSelectedRecipe(null)}
        >
          {/* Outer Shell: Enforces Rounded Corners & Clips Overflow */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              width: '90%',
              maxWidth: '750px', // 25% Wider
              maxHeight: '85vh',
              overflow: 'hidden', // Clips the scrollbar nicely inside corners
              position: 'relative',
              boxShadow: '0 10px 25px rgba(216, 112, 147, 0.25)',
              border: '2px solid #ffd1dc'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cute '✕' Close Button */}
            <button 
              onClick={() => setSelectedRecipe(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                backgroundColor: '#fff0f3',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#d87093',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                zIndex: 10
              }}
            >
              ✕
            </button>

            {/* Inner Scrollable Container */}
            <div 
              className="custom-modal-scroll"
              style={{
                padding: '30px',
                maxHeight: '85vh',
                overflowY: 'auto'
              }}
            >
              {/* Dish Title */}
              <h3 style={{ color: '#8b3a52', marginTop: 0, marginBottom: '20px', paddingRight: '35px', textAlign: 'center', fontSize: '22px' }}>
                {selectedRecipe.title}
              </h3>
              
              {/* Upper Content Layout */}
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '25px' }}>
                <img 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.title} 
                  style={{ 
                    width: '220px', 
                    height: '160px', 
                    borderRadius: '15px', 
                    objectFit: 'cover',
                    border: '3px solid #ffe4e1'
                  }} 
                />
                
                <div style={{ flex: '1', minWidth: '260px' }}>
                  {/* Cute Badges */}
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ backgroundColor: '#fff0f3', color: '#c25975', padding: '6px 12px', borderRadius: '15px', fontSize: '13px', fontWeight: 'bold' }}>
                      ⏱️ Ready in: {selectedRecipe.readyInMinutes} mins
                    </span>
                    <span style={{ backgroundColor: '#fff0f3', color: '#c25975', padding: '6px 12px', borderRadius: '15px', fontSize: '13px', fontWeight: 'bold' }}>
                      🍽️ Servings: {selectedRecipe.servings}
                    </span>
                  </div>

                  <h4 style={{ color: '#a0405d', margin: '0 0 10px 0', fontSize: '16px' }}>Ingredients</h4>
                  
                  {/* Properly Left-Aligned Cute Bullet List */}
                  <ul style={{ 
                    color: '#555', 
                    paddingLeft: '20px', 
                    margin: 0, 
                    fontSize: '14px', 
                    lineHeight: '1.8',
                    textAlign: 'left'
                  }}>
                    {selectedRecipe.extendedIngredients?.map((ing) => (
                      <li key={ing.id} style={{ marginBottom: '4px' }}>
                        {ing.original}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions Section Card */}
              <div style={{ backgroundColor: '#fff0f3', padding: '18px 20px', borderRadius: '15px', textAlign: 'left' }}>
                <h4 style={{ color: '#a0405d', marginTop: 0, marginBottom: '10px', fontSize: '16px' }}>
                  📖 Instructions
                </h4>
                <div 
                  style={{ color: '#4a4a4a', lineHeight: '1.7', fontSize: '14px' }}
                  dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions || 'No detailed instructions provided.' }}
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;