# Process

1. **Project Download and Challenge Identification**

   When reading the README.md, I identified the main challenges:
   - Switching themes with a switch
   - Coding responsiveness with proper visual design
   - Creating a modal with expected behaviors, including a chart I hadn't used before.

2. **Preliminary Analysis**

   I started by comparing the dark-light designs (the desktop dashboard, active states, and the modal). I decided to use the following technologies:
   - React with the create-react-app bundler for its compatibility with Styled Components.
   - Styled Components with flexbox to ensure good component adaptation and ordering.
   - TypeScript.

3. **Fine Visual Analysis**

   Considering the instructions in the README.md and having seen the style guide, I took the design JPEGs into a Figma frame with the specified width (1440px). I began by measuring the typography of the Overview Cards Heading to ensure I was respecting the correct proportions (it should be 14px in height). From there, I started measuring the rest of the typography, cards, and the switch.

4. **Hardcoded Dark Theme Markup**

   I started by coding the Header and found an initial inconsistency in the Dashboard design: both themes displayed the label "Dark Mode." I assumed it should show the word that described the active state. I also noticed that there was no color definition for the switch's little circle in the style-guide.md, which led me to inspect the Figma file. While working on the Card component, I listed what would later become keys of an object to feed the instantiated cards:
   - Social Media Logo
   - User Name
   - Supporters Type
   - Supporters Quantity
   - Follower Growth Rate.

   I also identified two new challenges:
   - Making the Follower Growth Rate display as green or red (with the corresponding up or down arrow) as needed.
   - Making values greater than 10,000 visually represent as "K."

   The Overview Card also needed to receive the following content via props:
   - Top Indicator
   - Indicator Value
   - Social Media Logo
   - Indicator's Growth Rate.

5. **Theme**

   I then started creating a Theme.tsx file that allowed color control based on the theme and where other style values used throughout the application were stored, as if I had defined a System Design. First, I reflected all the provided information in the style-guide.md, including colors by theme, common colors, undefined colors (which I obtained by inspecting the Figma designs), and device measurements to control breakpoints and achieve responsive design. Then, I refactored my components so that their style referred to the definitions in the Theme.tsx file and added logic to control the green or red color of the Growth Rates based on the value received via props.

6. **Toggle**

   To ensure that the switch effectively changes colors according to the theme, I passed props from the ModeToggler component to its parent Header and hacked its parent App component where the Theme provider is located, allowing the switch's state to set the theme. There is an opportunity for improvement here: using React Context and the Context API. This way, you can provide the theme and the function to toggle it at the top-level component (App) and access it from any child component without having to pass it as props.

7. **Active States**

   I had to extract color information by inspecting the design JPEG in Figma. I added the colors to Theme.tsx. I added a pointer cursor for the cards and the switch and configured the behavior on hover.

8. **Modal: Markup**

   While creating this component, I noticed that most of the information it displays comes from the main cards and adds two types of data. So, I prepared the component to receive this data via props.

9. **Chart**

   This chart required quite a bit of customization to visually match the design. As some props were not documented, I had to read the library's code to make the necessary changes. Additionally, I had to obtain colors that were not documented.
