// Example script: populate-selects.js
async function loadCountriesAndRegions() {
    const jsonUrl = 'https://raw.githubusercontent.com/ploogo/form-country-state/main/countries_regions.json';

    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const countriesSelect = document.getElementById('fe5880');
        const regionsSelect = document.getElementById('fe5881');

        Object.keys(data).forEach(country => {
            const option = new Option(country, country);
            countriesSelect.add(option);
        });

        countriesSelect.addEventListener('change', function() {
            const regions = data[this.value];
            regionsSelect.innerHTML = ''; // Clear existing options
            regions.forEach(region => {
                const option = new Option(region, region);
                regionsSelect.add(option);
            });
        });

    } catch (error) {
        console.error('Failed to load countries and regions:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadCountriesAndRegions);