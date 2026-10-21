A brief summary of the project
Planet - Planetary Facts Explorer
A responsive, interactive web application that showcases detailed information about planets in our solar system. Built as part of Group 11 - TS Academy project.
Search any planet to view its physical properties, visual representation, and comparative data - all sourced from NASA Planetary Fact Sheet.

Overview
Planet is a simple yet visually appealing planet information website. Users can:

Search for planets by name
View a featured planet card with key stats
Compare planets in a structured data table
Toggle between Light and Dark themes
Get helpful feedback when a planet is not found
The project focuses on clean UI, vanilla JavaScript logic, and educational content.

1. Header & Branding
   Custom planet logo
   Light/Dark theme toggle with localStorage persistence
   Icon changes from moon to sun based on theme

2. Smart Search System
   Search input with placeholder "Search planet name"
   Search by exact or partial match (e.g., "ear" finds Earth)
   Displays result count: Showing X results for "term"
   Clear button to reset search
   No Results Popup - Custom Figma-style popup when no planet matches:
   Shows searched term
   Message: "No results found! We couldn't find any planet matching your search."

3. Featured Planet Card
   Dynamic card that updates on search or table click:

Visual: High-quality planet image inside circular frame with highlight and optional ring (for Saturn)
Info: Name, Group (Terrestrial / Jovian), Subtitle/Highlight fact
Stats 3-column: Velocity, Mass, Orbital Period
Stats with Icons: Tilt, Distance, Gravity
Smooth scroll to featured section when a planet is selected from table

4. Planetary Facts Table
   Grouped by:
   Terrestrial Planets: Mercury, Venus, Earth, Mars
   Jovian Planets (Header)
   Gas Giants: Jupiter, Saturn
   Ice Giants: Uranus, Neptune
   Dwarf Planets: Pluto
   Columns: Group | Name | Mass (10^24kg) | Diameter (km)
   Active row highlighting
   Clickable planet names to update featured card
   Alternating row colors for readability
   Empty state handling: "No planets found for..."

5. Theme Toggle
   // Saves preference in localStorage
   localStorage.setItem('theme', 'dark' | 'light')
   Persists across page reloads
   Changes icon and text: DARK (moon) <-> LIGHT (sun)

6. Footer
   About section
   Copyright and credits
   Group members list
   Links to TS Academy and Designer
   Tech Stack
   HTML5 - Semantic structure
   CSS3 (styles.css) - Custom styling, responsive layout, dark mode
   Vanilla JavaScript (script.js) - No frameworks, pure DOM manipulation
   Icons: Remix Icon v4.6.0
   Font: JetBrains Mono (400, 500, 700)
   Images: External WebP/JPG from anurella.github.io planets repository

Core Functions

Function Description
updateFeatured(planet) Updates featured card image, name, stats, ring visibility
getGroups() Groups planets and filters by current search term
renderTable() Renders grouped HTML table with active state
doSearch() Handles search input, finds exact/partial matches, updates meta info
showPopup(term) / hidePopup() Controls No Results popup

Group Members:

1. Daramola Ayodeji Matthew - https://github.com/saintmattry
2. David Iwuagwu - https://github.com/dave-dll
3. Fakokunde oluwanifesimi -https://github.com/Fakoks
4. Ogunwede Rebecca -https://github.com/orebet23-lab
5. Jacob Damilare - https://github.com/mydigitalerad-stack
6. Alausa Mustapha - https://github.com/omobolacruise
7. Peter Oluwadamilare Edeki - https://github.com/Edeki-dev
8. Zeediqat Ajibike - https://github.com/Zamia0810
9. Adeolu Gideon -  https://github.com/GiddyGiddy-1


**How to run the project locally on VS Code**
**Step 1** - Install a Live Server: Click on the extensions icon on the left-hand side of VS Code or press Ctrl+Shift+X.
**Step 2** - Search for **Live Server** by Ritwick Dey.
**Step 3** - Click Install.
**Step 4** - Open the project folder and click **index.html**.
**Step 5** - Right-click anywhere in the editor and select **Open with Live Server**.
Finally, your browser should open automatically at an address similar to - http://127.0.0.1:5500

Live deployment link - https://saintmattry.github.io/Planet-Group-11/
