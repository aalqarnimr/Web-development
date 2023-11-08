const readline = require('readline');

const predefinedResponses = {
  'what is your name': 'i am your friend, ahmad',
  'cs or swe?': 'every major has its own stength',
  'i like you': "i like you too my friend",
  'whats your opinion about kfupm': "i think it is overrated",
  'is web development easy': "if you worked hard everything will be easy",
  'exit': 'Goodbye!',
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function chat() {
  rl.question('You: ', (userInput) => {
    const userMessage = userInput.toLowerCase();
    if (userMessage in predefinedResponses) {
      console.log(`Chatbot: ${predefinedResponses[userMessage]}`);
      if (userMessage === 'exit' || userMessage === 'quit') {
        rl.close();
      } else {
        chat();
      }
    } else {
      console.log("Chatbot: I'm sorry, I don't understand that. Please ask another question.");
      chat();
    }
  });
}
console.log('Chatbot: Hello! How can I assist you? (Type "exit" or "quit" to end the conversation)');
chat();