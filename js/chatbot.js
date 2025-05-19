// Add your API key directly in the code (for development purposes only)
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

async function main() {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyBPF5kw6IYkPMGpkTTMY0uhBBmjXj_MmBE',  // Directly included API Key
  });

  // Ensure that the file is available in the local system working directory or change the file path.
  const files = [
    await ai.files.upload({ file: fs.createReadStream('image_plant_care1.jpeg') }),
  ];

  const config = {
    temperature: 2,
    responseMimeType: 'text/plain',
    systemInstruction: [
      {
        text: `
Objective:
Create a chatbot that helps users choose the right furniture for their room by asking questions about room type, dimensions, and personal preferences, and then providing recommendations based on the input data.

1. Chatbot Introduction
Greeting: The chatbot will greet the user and offer assistance in designing their room.
Example: "Hello! I can help you design your perfect room. What type of room would you like to design?"
Purpose Clarification: The bot will explain that its purpose is to recommend furniture options that will fit the room.
Example: "I’ll ask you a few questions about your room, and then I’ll recommend furniture that fits perfectly!"

2. Main Dialogue Flow
Step 1: Ask for Room Type
Bot Question: "What kind of room are you designing today?"
Room Types (Entity): Bedroom, Living Room, Office, Kitchen, Dining Room, etc.
User Response Handling: Capture room type from the user’s response.
Follow-Up: If the user is undecided, prompt them with examples: "Are you designing a bedroom, living room, or perhaps a home office?"

Step 2: Request Room Dimensions
Bot Question: "Please provide the dimensions of your room in feet or meters (length, width, and height)."
User Response Handling: Capture the length, width, and height as numerical inputs. For example:
Length: 12 feet
Width: 15 feet
Height: 10 feet
Validation: Ensure the dimensions are valid numbers. If the response is invalid (non-numeric or missing), ask the user to provide valid measurements.

Step 3: Ask for Furniture Preferences
Bot Question: "What type of furniture are you looking for? For example, a bed, sofa, desk, or dining table?"
Furniture Types (Entity): Bed, Sofa, Desk, Dining Table, Chair, etc.
User Response Handling: Capture the specific furniture type that the user wants to place in the room.
Follow-Up: Example: "Great! What style do you prefer for the furniture? Modern, rustic, minimalist, or something else?"
Furniture Style (Entity): Modern, Rustic, Traditional, Minimalist, etc.

Step 4: Provide Furniture Recommendations Based on Room Dimensions
Bot Logic: Using the room dimensions provided by the user, calculate the space available for the selected furniture. Use predefined conditions for small, medium, and large rooms to recommend suitable furniture options.

Example Responses:
For a small room (e.g., 10x10 feet): "Given your room size, I recommend a compact queen-sized bed or a small sectional sofa. Would you like to explore some modern designs?"
For a medium room (e.g., 15x12 feet): "For your room size, I suggest a king-sized bed or a larger sofa. A stylish coffee table would also fit well. Let me know if you'd like more options!"
For a large room (e.g., 20x15 feet): "With a spacious room like yours, you could go for a sectional sofa and a large dining table. Would you prefer a modern or traditional style?"

3. Custom Logic for Room and Furniture Fit
The chatbot will calculate whether the chosen furniture fits within the given room dimensions. It can consider:
Room Shape: Square or rectangular.
Furniture Size: Standard furniture dimensions based on type (e.g., standard sofa size: 8x3 feet, standard bed size: 6x6 feet).
Example Calculation:
If the user provides room dimensions of 12x15 feet, and they want to add a sofa (8x3 feet), the chatbot will check if the furniture can fit in the room. If it fits, it will confirm; if not, it will suggest an alternative.
Example:
User: "My room is 12x15 feet, and I want a sofa."
Bot: "A standard sofa (8x3 feet) would fit perfectly in your room! Would you like to explore some modern styles?"
If not fitting: "Your room size is a bit tight for a standard sofa. I recommend a compact two-seater instead. Would that work?"

4. End of Interaction/Next Steps
Bot Conclusion: After providing the furniture suggestions, the bot will wrap up the conversation with a follow-up or a call to action:
Example: "Would you like to see more furniture options or explore the styles further?"
Offer links to furniture catalogs or external shopping sites (optional).
Final Option: "I can save your preferences for later if you'd like to come back. Just let me know!"

5. User Feedback Loop
After the bot suggests furniture, it will ask if the user is satisfied with the recommendation:
Example: "Was that helpful? Would you like me to recommend other options or help with something else?"
Feedback Handling: If the user is not satisfied or needs further help, the chatbot will offer additional suggestions or re-ask for details.
Example: "I’m sorry the recommendation didn’t work out. Let’s start again and fine-tune your preferences!"

6. Additional Features to Consider:
Style Preferences: Ask users if they want a particular furniture style, such as "modern" or "minimalist." This will refine the furniture suggestions based on their aesthetic.
Special Requirements: Ask for special needs (e.g., "Do you need furniture that’s pet-friendly?" or "Is there a specific color theme you’re following?").
User History: Optionally, the bot could store user preferences for future visits (e.g., "You’ve previously designed your bedroom. Would you like to start from there again?").

7. Bot Persona and Language:
Keep the tone friendly, conversational, and supportive throughout the interaction.
Maintain a professional yet approachable language style, focusing on offering helpful suggestions.

Example Conversation Flow:
Bot: "Hello! I can help you design your perfect room. What type of room would you like to design?"
User: "I want to design my bedroom."
Bot: "Great! Please provide the dimensions of your bedroom (length, width, height)."
User: "12x15 feet."
Bot: "Thanks! What furniture are you interested in? A bed, a sofa, a desk?"
User: "I need a bed."
Bot: "For a 12x15-foot bedroom, I recommend a queen-sized bed. Would you like to explore modern or traditional styles?"
User: "I prefer modern."
Bot: "Perfect! A modern queen-sized bed with storage would fit well in your room. Would you like to see more options?"
`
      }
    ],
  };

  const model = 'gemini-2.5-flash-preview-04-17';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          fileData: {
            fileUri: files[0].uri,
            mimeType: files[0].mimeType,
          }
        },
        {
          text: `Do you know what plant this is? How do I best take care of it? `,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `Thinking Process:

1.  **Analyze the Request:** The user wants to identify the main plant in the image (the one with prominent purple and dark green striped leaves) and wants care instructions for it. The provided crops are helpful hints for a closer look at the plants.

2.  **Identify the Main Plant:**
    *   Examine the main plant: It has striking, iridescent purple leaves with deep green or black veins forming a herringbone pattern. The leaves are lance-shaped and serrated at the edges.
    *   Look for identifying features in the crops: The leaves are fuzzy or slightly textured. The pattern is very distinctive.
    *   Recall or search for plants with vibrant purple, iridescent, or patterned foliage. Keywords for search: "purple plant dark veins iridescent," "purple striped leaves," "herringbone leaf pattern purple plant."
    *   Potential candidates that come to mind or show up in searches: Persian Shield ( *Strobilanthes dyerianus* ), Coleus (*Plectranthus scutellarioides*, though patterns vary), Begonia (various, but leaf shape/texture differs), Prayer Plant (*Maranta*/*Calathea*, patterns different), *Gynura* (velvety purple, different texture).
    *   Comparing the image characteristics (lance-shaped leaves, serrated edge, iridescent purple with dark veins, slightly fuzzy texture) to *Strobilanthes dyerianus* (Persian Shield): Yes, the features match perfectly.

3.  **Confirm Identification:** *Strobilanthes dyerianus* is the most likely identification.

4.  **Research Care Instructions for Persian Shield (*Strobilanthes dyerianus*):** Search terms: "Strobilanthes dyerianus care," "Persian Shield plant care."

5.  **Synthesize Care Information:** Based on typical needs of this plant:
    *   **Light:** Requires bright, indirect light for best leaf color. Too little light makes it leggy and reduces purple color. Too much direct sun can scorch leaves.
    *   **Water:** Regular watering, but ensure the soil dries out between waterings. Don’t overwater, as it is susceptible to root rot.
    *   **Humidity:** Likes high humidity. Mist the leaves or place the pot on a humidity tray.
    *   **Temperature:** Prefers warmth, between 60°F and 85°F (15°C to 29°C). Avoid cold drafts.
    *   **Soil:** Well-draining potting mix, slightly acidic.
    *   **Fertilization:** Feed with a balanced fertilizer monthly during the growing season (spring and summer).
    *   **Pruning:** Regularly prune to maintain shape, and pinch back leggy growth to encourage bushiness.
    *   **Toxicity:** Safe for pets.

6.  **Final Output:** The plant in the image appears to be *Strobilanthes dyerianus* (Persian Shield). Here’s how to care for it:

    * Light: Bright, indirect light
    * Water: Keep soil moist but not soggy, and allow it to dry slightly between waterings
    * Humidity: Prefers high humidity
    * Temperature: 60°F to 85°F (15°C to 29°C)
    * Fertilize monthly during the growing season (spring and summer)
    * Prune regularly to maintain shape
    * Toxicity: Pet safe

    Let me know if you have any further questions about your plant!`
        },
      ],
    },
  ];

  try {
    const result = await ai.chat({ model, contents, config });
    console.log(result);
  } catch (error) {
    console.error('Error processing request:', error);
  }
}

main();
