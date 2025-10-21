# WSU Engineering Curriculum Flowchart

An interactive, accessible curriculum flowchart for Washington State University's Voiland School of Chemical Engineering and Bioengineering. This tool helps students visualize their degree plans with prerequisites, corequisites, and course relationships.

**🌐 [View Live Demo](https://ssaunders9.github.io/Flowchart/)**

## 📋 Features

### Interactive Flowchart (index.html)
- **Dynamic Program Selection** - Switch between multiple [CHE and BIOENG] engineering programs instantly
- **Visual Prerequisites & Corequisites** - Color-coded connection lines show course relationships
- **Course Details** - Click on any course to view notes, alternatives, and semester restrictions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility-First** - Full keyboard navigation, screen reader support, and WCAG 2.1 AA compliance
- **Prerequisite Validation** - Visual indicators show courses with prerequisites, corequisites, and leading requirements

### Static Flowchart (staticflow.html)
- **Complete Visual Overview** - Non-interactive visual representation perfect for printing or sharing
- **Reduced File Size** - Optimized for faster loading without interactive features

### Supported Programs
- **Chemical Engineering (CHE)**
  - Current (V1)
  
- **Bioengineering (BIOENG)**
  - Biomedical Systems Engineering (BMSE) - V1 & V2 (Proposed)
  - Cellular & Molecular (CMBE) - V1 & V2 (Proposed)
  - Pre-Med Cellular & Molecular (PREMED-CMBE) - V1 & V2 (Proposed)
  - Pre-Med Biochemical Sciences (PREMED-BMSE) - V1 & V2 (Proposed)

## 🚀 Getting Started

### Prerequisites
- Node.js (optional, only if running a local server)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ssaunders9/Flowchart.git
   cd Flowchart
   ```

2. **Open the flowchart locally**
   - Option A: Open `index.html` directly in your browser
   - Option B: Run a local server
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js with http-server
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

## 📁 Project Structure

```
HTML/
├── Flow.html               # Interactive flowchart (main entry point)
├── StaticFlow.html         # Static visual flowchart
├── programsData.js         # Curriculum data for all programs
├── README.md               # This file
```

## 📊 Data Structure (programsData.js)

The `programsData.js` file contains all curriculum information in the following format:

```javascript
const programsData = {
  'BIOENG-CMBE-V2': {
    name: 'Bioengineering - Cellular & Molecular (Proposed)',
    effectiveDate: '2026-08-16',
    courseData: {
      'BIOENG-305': {
        code: 'BIO ENG 305',
        name: 'Bioengineering Ethics and Professional Development',
        shortName: 'Ethics & Prof Dev',
        credits: 3,
        type: 'engineering',
        semester: 'Year 3 Fall',
        prereqs: [],
        coreqs: [],
        alternatives: [],
        notes: 'Additional course information here'
      },
      // ... more courses
    },
    semesterOrder: ['Year 1 Fall', 'Year 1 Spring', /* ... */ ]
  },
  // ... other programs
};
```

### Course Properties
- **code** - Official course code displayed on flowchart
- **name** - Full course name
- **shortName** - Abbreviated name for compact display
- **credits** - Credit hours
- **type** - `'engineering'`, `'science'`, `'ucore'`, or `'technical'` (determines color)
- **semester** - Position in curriculum (e.g., 'Year 3 Fall')
- **prereqs** - Array of course IDs that must be completed before
- **coreqs** - Array of course IDs that must be taken concurrently
- **alternatives** - Array of alternative course options
- **notes** - Additional information, restrictions, or requirements
- **semesterRestriction** (optional) - 'Fall', 'Spring', or 'Summer' only

## 🎨 Visual Design

### Course Colors
- **Light Blue** (#8fc9f7) - Engineering courses
- **Light Green** (#a5d6a7) - Science courses
- **Purple** (#ce93d8) - UCORE courses
- **Gray** (#bdbdbd) - Technical electives

### Relationship Lines
- **Orange** - Prerequisites
- **Blue** - Corequisites
- **Green** - Leads to/depends on

## ♿ Accessibility Features

This project prioritizes accessibility and includes:

- **Keyboard Navigation** - Full support for keyboard-only users
- **Screen Reader Support** - ARIA labels and semantic HTML
- **WCAG 2.1 AA Compliance** - Meets Web Content Accessibility Guidelines
- **High Contrast** - Colors chosen for readability
- **Focus Indicators** - Clear visual feedback for keyboard navigation
- **Skip Links** - Jump to main content
- **Responsive Text** - Readable on all screen sizes
- **Tooltip Information** - Additional context available for all interactive elements

**Note:** The static flowchart (`staticflow.html`) is a visual representation only. For full accessibility features, please use the interactive flowchart (`index.html`).

## 🛠️ Customization

### Updating Curriculum Data

1. **Edit programsData.js** - Modify course information, add programs, or update requirements
2. **Add New Program** - Create a new entry in `programsData` with the same structure
3. **Update Course** - Find the course in the relevant program and modify its properties

### Styling

The flowchart uses inline CSS in the HTML files. To customize:

1. **Colors** - Search for hex color codes (e.g., `#8fc9f7`) in the `<style>` section
2. **Layout** - Modify `.semester-column` width and gap settings
3. **Typography** - Update font sizes in course-related classes

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| Chrome Mobile | Latest | ✅ Full |
| Safari iOS | Latest | ✅ Full |

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Not taking contributions at this time.

## ⚠️ Disclaimer

This flowchart is provided for **convenience only** to help visualize your degree plan. The official [WSU catalog](https://catalog.wsu.edu/) is the authoritative reference for all degree requirements. Always verify current requirements with your academic advisor and follow [WSU academic regulations](https://registrar.wsu.edu/academic-regulations/).

## 📞 Support & Questions

- **For curriculum questions** - Contact the Voiland School of Chemical Engineering and Bioengineering
- **For technical issues** - Open an issue on the [GitHub repository](https://github.com/ssaunders9/Flowchart/issues)
- **For accessibility concerns** - Please report accessibility issues so we can improve

## 🔄 Version History

### v1.0.0 (Current)
- Interactive and static flowchart implementations
- Support for 6 engineering programs
- Full accessibility compliance
- Mobile-responsive design
- Course relationship visualization

### Planned Features
- TBD

---

**Made with ❤️ for WSU Engineering Students**

Last updated: October 2025
