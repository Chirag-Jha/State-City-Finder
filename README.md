# State City Finder

A simple web interface to select Indian states and cities, built using plain HTML, JavaScript.
This tool loads state-city mappings from a JSON file and allows users to:

- View all cities across India
- Select a state to see its cities
- Select a city to see which state it belongs to
- Enjoy a fallback CSS experience if external styles fail to load

---

## 🔧 Features

- 🗺 Dynamic loading of state-city data from `cities.json`
- 🔄 Two-way lookup:
  - Select a **state** → show its cities
  - Select a **city** → show which state it belongs to
- 🌐 Graceful fallback if CDN stylesheet is not available (e.g., offline)
- 📜 Clean, minimal UI using PicoCSS or custom fallback styles

---

## 📁 File Structure

```
StateCitySelector/
├── index.html           # Main application
├── script.js            # External JS file if you split logic
├── cities.json          # JSON data with state-city mappings

```

---

## 🔗 Data Format (`cities.json`)

```json
{
  "Haryana": ["Gurgaon", "Hisar"],
  "Goa": ["Panaji", "Margao", "Mapusa"],
  "Delhi": ["New Delhi", "Dwarka"]
}
```

Each key is a **state**, and its value is a list of **cities**.

---

## 🚀 How to Use

1. Clone or download the repository.
2. Make sure you have a `cities.json` file in the same directory as `index.html`.
3. Open `index.html` in your browser.
4. Use the dropdowns to explore state-city relationships.

---

## 🧱 Technologies Used

- HTML5
- JavaScript (ES6+)
- [PicoCSS](https://picocss.com) (optional, CDN-based)
- Fallback CSS using `<style>` injection

---

## 📦 Optional Enhancements

- ✅ Search/filter for cities
- ✅ Alphabetical sorting
- 🔍 Type-ahead suggestions
- 🌍 Map integration
- 💾 Local storage for remembering selections

---

## 🛡 License

This project is open-source and available under the MIT License.

---

## 🙋‍♀️ Author

Made with 💻 by [ChiragKumarJha]
