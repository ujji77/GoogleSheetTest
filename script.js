async function fetchData() {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRUE13ev_K11WaICavNM6uoI5ErVNCorOZyc12hk50LGEkVxjzZwV49VR45m6_Bj_O3aCKGMxLL9nfF/pub?output=csv');
    const data = await res.text();
  
    // Parse CSV data
    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
      const cols = row.split(',');
      const category = cols[0];
      const title = cols[1]; 
      const image = cols[2];
  
      // Create card element
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = image;
  
      const titleEl = document.createElement('div');
      titleEl.className = 'card-title';
      titleEl.textContent = `${category} - ${title}`;
  
      card.appendChild(img);
      card.appendChild(titleEl);
  
      // Add card to container
      document.getElementById('card-container').appendChild(card);
    });
  }
  
  const container = document.getElementById('container');
  
  const card = document.createElement('div');
  card.textContent = 'Hello World';
  
  container.appendChild(card);
  
  fetchData();
  