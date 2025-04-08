🌟 Spring AI Demo Project 🤖

Welcome to the Spring AI Demo Project! 🚀 This is a Spring Boot-based application that integrates multiple AI services, including chat, image generation, and recipe creation. With this project, you can interact with OpenAI's GPT-4 model to generate creative text, create images from textual descriptions, and get personalized recipe suggestions. 🍳🍝

🚀 Features

•	Chat AI 🗣️: Interact with the AI by sending prompts and receiving text-based responses.

•	Image Generation 🖼️: Generate stunning images based on textual prompts with customizable parameters.

•	Recipe Generation 🍽️: Create recipes based on ingredients, cuisine types, and dietary restrictions.

🧠 Technologies Used

•	Spring Boot: Backend framework for creating REST APIs with Java.

•	OpenAI API: Used for generating text responses (Chat), creating images, and generating recipe instructions.

•	Java 17: The programming language used for the backend.

•	Spring AI: A custom Spring module to simplify integration with OpenAI's services.

🔧 Project Structure

•	ChatService: Communicates with the Chat GPT-4 model to generate text-based responses.

•	ImageService: Interfaces with the OpenAI Image Generation model for generating images.

•	RecipeService: Generates detailed recipes based on user input (ingredients, cuisine, dietary restrictions).

•	GenAIController: Exposes RESTful API endpoints for chat, image generation, and recipe creation.

•	WebConfig: Configures CORS settings to allow requests from the frontend.

⚡ Installation Guide

Prerequisites

1.	Java 17 or higher
2.	Maven or Gradle
3.	Spring Boot dependencies (included in pom.xml)


Setup

1.	Clone the repository:
bash
KopierenBearbeiten
git clone https://github.com/your-username/spring-ai-demo.git
2.	Navigate to the project directory:
bash
KopierenBearbeiten
cd spring-ai-demo
3.	Install dependencies using Maven:
bash
KopierenBearbeiten
mvn install
4.	Run the application:
bash
KopierenBearbeiten
mvn spring-boot:run
6.	The application will be available at http://localhost:8080.

🌍 API Endpoints
   
1. Chat AI - Get a Text Response 🗣️
   
Endpoint: /ask-ai
Method: GET
Parameters:
•	prompt (String): The prompt you want to send to the AI.
Example Request:
bash
KopierenBearbeiten
GET http://localhost:8080/ask-ai?prompt=What is the capital of France?
Response:
json
KopierenBearbeiten
{
  "response": "The capital of France is Paris."
}

2. Chat AI Options - Get Specific Responses 🎯

Endpoint: /ask-ai-options
Method: GET
Parameters:
•	prompt (String): The prompt for the AI.
Example Request:
bash
KopierenBearbeiten
GET http://localhost:8080/ask-ai-options?prompt=Generate the names of 5 famous pirates.
Response:
json
KopierenBearbeiten
{
  "response": "Blackbeard, Captain Kidd, Anne Bonny, Calico Jack, Bartholomew Roberts"
}

4. Generate Image from Text 🖼️

Endpoint: /generate-image
Method: GET
Parameters:
•	prompt (String): The description for the image you want to generate.
•	quality (String): The quality of the image. Default is "hd".
•	n (Integer): Number of images to generate. Default is 1.
•	width (Integer): The width of the generated image. Default is 1024.
•	height (Integer): The height of the generated image. Default is 1024.
Example Request:
bash
KopierenBearbeiten
GET http://localhost:8080/generate-image?prompt=Sunset over the ocean&quality=hd&n=2&width=1024&height=1024
Response:
json
KopierenBearbeiten
{
  "imageUrls": [
    "https://image.url/1",
    "https://image.url/2"
  ]
}


5. Recipe Creator 🍽️

Endpoint: /recipe-creator
Method: GET
Parameters:
•	ingredients (String): A comma-separated list of ingredients.
•	cuisine (String): The preferred cuisine type (optional).
•	dietaryRestrictions (String): Any dietary restrictions (optional).
Example Request:
bash
KopierenBearbeiten
GET http://localhost:8080/recipe-creator?ingredients=eggs,pasta,cheese,milk&cuisine=Italian&dietaryRestrictions=gluten-free
Response:
json
KopierenBearbeiten
{
  "recipe": "Cheesy Pasta Bake: Cook the pasta according to package instructions, then mix it with a cheese sauce made from melted cheese and milk..."
}


🔑 AI Models Used

•	Chat AI: This application uses GPT-4, a powerful language model from OpenAI, for text generation. The model is used to generate responses to user prompts and to create recipes based on ingredients.
•	Image Generation: The application uses OpenAI's image generation model to create images from text prompts, with customizable options for image quality, number, and size.
•	Recipe Creation: By using the Chat AI model, the application generates detailed recipes, considering user input like ingredients, cuisine, and dietary restrictions.

🌍 Frontend Integration

The frontend communicates with these endpoints to create a dynamic user interface where users can input data and receive responses:
1.	Chat: Allows users to input a prompt and get a text response from the AI.
2.	Image Generator: Users can generate images based on descriptions they provide.
3.	Recipe Generator: Generates personalized recipes based on available ingredients and user preferences.

🔧 CORS Configuration

CORS is configured to allow requests from http://localhost:5173 (or wherever your frontend is hosted). You can modify the allowed origins in WebConfig.java.
java
KopierenBearbeiten
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173") // Adjust as per your frontend URL
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true);
}

🛠️ Troubleshooting

•	CORS Issues: Ensure your frontend is hosted at the correct URL and allowed in WebConfig.java.
•	API Errors: Check the backend logs for more details if any issues occur with the API.
•	Missing or Incorrect Responses: Ensure the parameters are correctly formatted and that your prompts are clear.

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
________________________________________
🎉 Thank you for using the Spring AI Demo Project! Enjoy creating with AI and have fun! 🚀



