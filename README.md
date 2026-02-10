# City Weather Lookup – Error-Handled Weather App

**Overview**  
A lightweight city-based weather lookup application that fetches real-time temperature data using public APIs.  
The project emphasizes clean async/await usage, API chaining, and centralized error handling through HTTP status codes.  
It is designed as a learning-focused project to demonstrate robust client-side API consumption and error management.

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection to fetch geolocation and weather data  
- No backend or database required (fully client-side application)  

**Technologies Used**
- **HTML5** for structuring user input and result display  
- **Vanilla JavaScript** for application logic and async control flow  
- **Fetch API** for making HTTP requests  
- **Open-Meteo Geocoding API** to convert city names into latitude and longitude  
- **Open-Meteo Weather API** to retrieve current weather information  
- **JSON-based Error Configuration (`status.json`)** for centralized error messages  

**Key Features**
- City-based weather search with live temperature display  
- Two-step API workflow:
  - City name → Geolocation data  
  - Coordinates → Weather data  
- Centralized HTTP error handling using status codes  
- Clear, user-friendly error messages mapped from API responses  
- Clean separation of data fetching and error logic  
- Readable and maintainable async/await–based code structure  

**Application Flow**
- User enters a city name and clicks **Search**  
- App fetches geolocation data for the city  
- Latitude and longitude are passed to the weather API  
- Current temperature is displayed on success  
- Errors (invalid city, API failure, rate limits, etc.) are handled gracefully using predefined messages  

**Purpose**
- To demonstrate real-world API chaining on the client side  
- To showcase structured error handling using HTTP status codes  
- To practice clean asynchronous JavaScript patterns  

**Notes**
- All logic runs entirely on the client side  
- Error messages are managed through an external JSON configuration  
- APIs used do not require authentication keys  
- Designed for learning and clarity rather than production use  

**Possible Enhancements**
- Display additional weather details (wind, humidity, conditions)  
- Add loading indicators for API calls  
- Improve UI styling and responsiveness  
- Cache recent searches using localStorage  
- Extend error handling with retry logic  
