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

<img width="680" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/17e10a1a-4cf2-4bfe-987d-47f03b5898aa">


4. **Hardcoded Dark Theme Markup**

   I started by coding the Header and found an initial inconsistency in the Dashboard design: both themes displayed the label "Dark Mode." I assumed it should show the word that described the active state. I also noticed that there was no color definition for the switch's little circle in the style-guide.md, which led me to inspect the Figma file. 

Screenhsots of the Design files:

<img width="440" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/68cd32fe-6999-4bdc-ab41-3fd824dfdf64">

<img width="400" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/bb2cd27a-7f6c-49fc-9d48-614f3f31c967">

Screenshot of my app:

<img width="150" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/b38737eb-02d3-4eeb-b4a7-98eb3761d2ba">

<img width="149" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/0d6a3a68-4f62-4763-9468-c20adce36c13">

While working on the Card component, I listed what would later become keys of an object to feed the instantiated cards:
   - Social Media Logo
   - User Name
   - Supporters Type
   - Supporters Quantity
   - Follower Growth Rate.

   I also identified two new challenges:
   - Making the Follower Growth Rate display as green or red (with the corresponding up or down arrow) as needed.

Screenshots of my code:   
  
<img width="639" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/81b12bf6-692c-4931-95ed-24b1f4b40037">
<img width="492" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/547996ab-da9f-4d5a-b731-ca2f759fb126">

Screenshots of my app:

<img width="153" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/6d26ab0a-b342-4109-8b52-a1c9c7183665">
<img width="126" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/d4201b60-6db3-4e72-8b3a-b8583fa2249e">

   - Making values greater than 10,000 visually represent as "K.". Since this was repeated in the Modal also, I decided to create an IndicatorValue component to handle this.

Screenshot of my code:

<img width="560" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/9277f6b5-cfac-4a5a-8b18-b57355dbbd72">

   The Overview Card also needed to receive the following content via props:
   - Top Indicator
   - Indicator Value
   - Social Media Logo
   - Indicator's Growth Rate.

5. **Theme**

   I then created a Theme.tsx file to allow color control based on the theme selection. This modular way of handling style is desirable when having a defined System Design. 

First, I reflected all the provided information in the `style-guide.md` file, including colors by theme, common colors, undefined colors (which I obtained by inspecting the Figma designs), and device measurements to control breakpoints and achieve responsive design. Then, I refactored my components so that their style referred to the definitions in the Theme.tsx file.

Screenshot of my code:

<img width="351" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/52c80927-f3bd-4d7c-ac46-5bb5dae851c6">

6. **Toggle**

   To ensure that the switch effectively changes colors according to the theme, I passed props from the `ModeToggler` component to its parent `Header` and hacked its parent `App` component where the Theme provider is located, allowing the switch's state to set the theme. In hindside, I find an opportunity for improvement here: using React Context and the Context API. This way, I could provide the theme and the function to toggle it at the top-level component (`App`) and access it from any child component without having to pass it as props.

7. **Active States**

   I had to extract color information by inspecting the design JPG in Figma. I added the colors to `Theme.tsx`. I added a pointer cursor for the cards and the switch and configured the behavior on hover.

Screenshot of Figma:

<img width="569" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/4e6e318c-6e80-468d-9273-b2d9b815f244">

<img width="566" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/c1f35a75-4534-4f07-af97-61633e2df3b5">


8. **Modal: layout**

   While creating this component, I noticed that most of the information it displays comes from the main cards and adds two types of data. So, I prepared the component to receive this data via props.
   I had to create the x icon (modal closening) in Figma exported as SVG in order to chage its color according to the theme selected.

Screenshot of Figma:

<img width="349" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/5941f0ef-a68f-426f-baf8-9d091d5cda66">

   I also found a Design inconsistency here. The "Total followers" number shows the main color for text in the Dark Theme design, but in the Light theme a non-documented gray is being used. I decided to keep the style structure and just use the main color for the Light Theme instead.

Screenshots of the Design files:

<img width="118" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/abfe1ffc-b629-418b-8dda-373ad3858de5">

<img width="116" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/71fadd64-106a-4676-b17a-8ab935698969">


10. **Chart**

   This chart required quite a bit of customization to visually match the design. As some props were not documented, I had to read the library's code to make the necessary changes. I also had to learn how to create a custom tooltip. Additionally, I had to obtain colors that were not documented.

Screenshot of Figma:

<img width="472" alt="image" src="https://github.com/1risS/ms-challenge/assets/31085755/37b6129e-1c58-440b-8303-f528878e9cd6">

# Conclusion

   Although some things were new, I felt very confident across this coding process. I enjoyed having skills enough to reflect the provided design correctly. I love the way the app adapts to all device sizes and even in rare devices all the components get well organized, legible and respecting the visual hierarchy provided by the design files. I hope you find my method solid enough to be part of your team! 
