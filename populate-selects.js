// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadCountriesAndRegions);

// Get the country and region select inputs
const countriesSelect = document.getElementById('fe5880');
const regionsSelect = document.getElementById('fe5881');

// Function to populate the country select input
function populateCountries(data) {
    Object.keys(data).forEach(country => {
        const option = new Option(country, country);
        countriesSelect.add(option);
    });
}

// Function to populate the region select input based on the selected country
function populateRegions(data, selectedCountry) {
    const regions = data[selectedCountry];
    regionsSelect.innerHTML = ''; // Clear existing options
    regions.forEach(region => {
        const option = new Option(region, region);
        regionsSelect.add(option);
    });
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', async function() {
    const jsonUrl = 'https://raw.githubusercontent.com/ploogo/form-country-state/main/countries_regions.json';
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        populateCountries(data);
        countriesSelect.addEventListener('change', function() {
            populateRegions(data, this.value);
        });
    } catch (error) {
        console.error('Failed to load countries and regions:', error);
    }
});
