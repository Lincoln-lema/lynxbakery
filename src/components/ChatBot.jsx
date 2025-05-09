import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import Footer from './Footer';
import { Navbar } from 'react-bootstrap';
import Aos from 'aos';

const responses = [
  { pattern: /\b(hi|hello|hey|greetings|how are you)\b/i, reply: ["Hi there! I'm Cakely 🍰. Ask me anything about cakes! 🎂", "Hey sweet tooth! 🍬 How can I help today?", "Welcome to Cakely – your cake buddy! 🧁 What would you like to know?", "Hello! 👋 Ready to talk all things sweet and baked? 🥮"] },

  { pattern: /what|which.*cakes.*(available|have)|available.*cakes/i, reply: ["We have: Red Velvet Bliss ❤️, Coffee Walnut ☕🌰, Lemon Zest 🍋, Marble 🌀, Nutella 🍫, Pineapple Paradise 🍍, Cookies & Cream 🍪, Vanilla Buttercream 🍦, Chocolate Overload 🍫, and more!", "Our cakes include Strawberry Swirl 🍓, Carrot Delight 🥕, Floral Fantasy 🌸 and others!"] },
  
  { pattern: /(price|cost|how.*much|pricing).*red velvet|red velvet.*(price|cost|how.*much|pricing)/i, reply: ["Red Velvet Bliss Cake ❤️: KES 1,500 for 1kg, KES 2,700 for 2kg"] },
  { pattern: /(price|cost|how.*much|pricing).*coffee walnut|coffee walnut.*(price|cost|how.*much|pricing)/i, reply: ["Coffee Walnut Cake ☕🌰: KES 1,300 for 1kg, KES 2,400 for 2kg"] },
  { pattern: /(price|cost|how.*much|pricing).*lemon zest|lemon zest.*(price|cost|how.*much|pricing)/i, reply: ["Lemon Zest Cake 🍋: KES 1,200 for 1kg, KES 2,200 for 2kg"] },
  { pattern: /(price|cost|how.*much|pricing).*nutella|nutella.*(price|cost|how.*much|pricing)/i, reply: ["Nutella Cake 🍫: KES 1,800 for 1kg, KES 3,300 for 2kg"] },
  { pattern: /(price|cost|how.*much|pricing).*cookies.*cream|cookies.*cream.*(price|cost|how.*much|pricing)/i, reply: ["Cookies & Cream Cake 🍪🍦: KES 1,350 for 1kg"] },
  { pattern: /(price|cost|how.*much|pricing).*vanilla|vanilla.*(price|cost|how.*much|pricing)/i, reply: ["Vanilla Buttercream Cake 🍦: KES 1,250 for 1kg"] },
  { pattern: /price|cost|how.*much|pricing/i, reply: ["Our cakes range from KES 1,000 to 3,500 depending on size and flavor. 💵", "Tell me which cake you want pricing for: Red Velvet, Nutella, etc. 🎂", "Pricing depends on customizations too! Send your cake details for an estimate. ✨"] },
  
  { pattern: /how.*long.*delivery|delivery.*time/i, reply: ["Same-day delivery within Nairobi 🚚. Nearby towns get it next day! 🗓️", "Delivery in Nairobi takes 3–5 hours. For towns around, it’s delivered next day. 📦", "Custom cake delivery can take 6–8 hours depending on design complexity. ⏱️"] },
  
  { pattern: /how.*long.*(ready|make|prepare)|cake.*ready.*when/i, reply: ["Cakes are ready within 2–4 hours depending on the type and design. 🕒", "Custom cakes take about 6 hours. Regular cakes are ready in 3 hours. 🧁", "Urgent orders? We can fast-track some cakes in 2 hours! 🚀"] },
  
  { pattern: /where.*located|location|address/i, reply: ["We are located in Westlands, Nairobi – Lynx Bakery HQ! 🍞", "Find us at Lynx Plaza, Waiyaki Way – look for the pink cupcake sign! 🧁📍"] },
  
  { pattern: /do|what.*about.*deliver|delivery.*available|can.*deliver/i, reply: ["Yes, we deliver all over Nairobi and nearby towns. 🚛", "We offer delivery via rider services and it's super fast! 🚴‍♂️💨"] },
  
  { pattern: /custom.*cake|make.*custom|theme.*cake|photo.*cake/i, reply: ["Yes! We make custom cakes for birthdays 🎉, weddings 💍, baby showers 👶 and more.", "Absolutely! Let us know your design and we’ll bake it up beautifully. 🎂✨", "We do photo cakes 🖼️, theme cakes 🎭, and personalized messages too! 📝"] },
  
  { pattern: /order|how.*order|place.*order/i, reply: ["You can order through WhatsApp, our website 🌐 or visit our store. 🏪", "Place your order online and we’ll bake it fresh for you. 🔥", "You can also DM us on Instagram for special orders! 📲"] },
  
  { pattern: /discount|offer|promo|deal/i, reply: ["We offer discounts for bulk orders and holidays. 🎉💸", "Check our Instagram 📸 for seasonal discount codes! 🏷️", "Students get 10% off with ID! 🎓🍩"] },
  
  { pattern: /recommend.*cake|cake.*(birthday|wedding|shower|graduation|anniversary|party)/i, reply: ["For birthday 🎂: Red Velvet Bliss or Cookies & Cream are perfect!", "For weddings 💒: Go elegant with Floral Fantasy or Marble Tiered Cake.", "For baby showers 🍼: Try Strawberry Swirl or a custom theme cake.", "Graduation? 🎓 Chocolate Overload or Carrot Delight will celebrate the milestone right!", "Anniversary cakes? 💕 Rose Pistachio or Heart-shaped Vanilla are a hit.", "Hosting a party? 🎊 Go fun with Nutella, Black Forest, or even a Custom Photo Cake!"] },
  
  { pattern: /working.*hours|when.*open|opening.*hours/i, reply: ["Mon–Sat: 8am–6pm ⏰. Sunday: pickups & pre-orders only. 📦", "Open daily except public holidays. Pre-orders always welcome! 📅"] },
  
  { pattern: /contact|reach.*you|how.*contact/i, reply: ["Call us at 📞 +254 712 345678 or email 📧 lynxbakery@cakely.co.ke", "DM us on Facebook or Instagram @cakelybakes 💬"] },
  
  { pattern: /cake.*recipe|how.*bake|give.*recipe/i, reply: ["Check our website blog 📖 for recipes, or ask me for a specific one like Red Velvet or Banana! 🍌", "Want to bake one yourself? 👨‍🍳 Ask for a recipe – I’ve got them all!", "From frosting tips 🍥 to ingredient swaps 🧂, I’ve got the baking wisdom you need."] },
  
  { pattern: /flavor.*options|which.*flavor|available.*flavors/i, reply: ["We offer chocolate 🍫, vanilla 🍦, strawberry 🍓, lemon 🍋, coffee ☕, pineapple 🍍, banana 🍌, carrot 🥕, and more!", "Feeling adventurous? Try mango mousse 🥭 or rose pistachio 🌹!"] },
  
  { pattern: /who.*bakes|who.*chef|baker.*name/i, reply: ["Our expert bakers have 10+ years of experience – each cake is handcrafted with love. 🍳❤️"] },
  
  { pattern: /cancel.*order|how.*cancel/i, reply: ["You can cancel up to 1 hour after ordering. After that, we’ll have started baking! ⏳", "We accept cancellations early – just contact us ASAP! 📞"] },
  
  { pattern: /delivery.*cost|how.*much.*delivery|delivery.*charge/i, reply: ["Delivery within Nairobi is KES 200–400 depending on distance. 🚚", "We offer free delivery for orders above KES 3,000! 🎁", "Outside Nairobi? We use trusted couriers – rates vary by location. 📍"] },
  
  { pattern: /.*/, reply: ["Hmm... I’m not sure about that. 🤔 Try asking about cakes, prices or delivery times. 🍰", "Sweet question! 🍬 Try asking about our cakes, delivery or how to order. 🍮"] }
  ];
  

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const greeting = responses[0].reply[Math.floor(Math.random() * responses[0].reply.length)];
      setMessages([{ text: greeting, sender: 'bot' }]);
    }, 1000);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    const lower = input.toLowerCase();
    let botResponse = null;

    for (let r of responses) {
      const pattern = new RegExp(r.pattern.source, "i");
      if (pattern.test(lower)) {
        const reply = r.reply[Math.floor(Math.random() * r.reply.length)];
        botResponse = reply;
        break;
      }
    }

    if (!botResponse) {
      botResponse = "Hmm... I’m not sure about that. Try asking about cakes, prices or delivery times. 🍰";
    }

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1200);
  };

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);
  

  return (
    <div className="chatbot-wrapper ">
      
      <div className="chatbot-container">
        <div className="chatbox animated fadeInUp" data-aos="fade-up" >
          <div className="header">Cakely 🍰 – Cake Chat Assistant</div>
          <div className="messages" >
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>{msg.text}</div>
            ))}
            <div ref={messagesEndRef} />
            {isTyping && <div className="message bot typing">Cakely is typing...</div>}
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder="Ask me anything about cakes..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
     
    </div>

  );
  
}

export default Chatbot;
