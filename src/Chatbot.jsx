import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Navigations/Sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileNav from "@/components/Navigations/MobileNav";
import ChatArea from "@/components/Chat/ChatArea";

const initialModels = [
  {
    id: "1",
    name: "GPT-4o",
    description: "Advanced model with strong reasoning capabilities",
    prompt: "You are a helpful AI assistant.",
  },
  {
    id: "2",
    name: "Claude 3",
    description: "Balanced model with good context understanding",
    prompt: "You are Claude, an AI assistant by Anthropic.",
  },
  {
    id: "3",
    name: "Llama 3",
    description: "Open source model with broad knowledge",
    prompt: "You are a helpful and honest assistant.",
  },
];

const initialConversations = {
  1: [
    { id: "1", role: "system", content: "You are a helpful AI assistant." },
    {
      id: "2",
      role: "user",
      content: "What can you tell me about quantum computing?",
    },
    {
      id: "3",
      role: "assistant",
      content:
        "Quantum computing is a type of computing that uses quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously. This allows quantum computers to solve certain problems much faster than classical computers.",
    },
    {
      id: "4",
      role: "user",
      content: "How close are we to practical quantum computers?",
    },
    {
      id: "5",
      role: "assistant",
      content:
        "We're making steady progress in quantum computing, but practical, error-corrected quantum computers that can outperform classical computers for a wide range of applications are still years away. Current quantum computers are in what's called the 'NISQ' era (Noisy Intermediate-Scale Quantum), with 50-100+ qubits but high error rates. Companies like IBM, Google, and startups are working on scaling up while reducing errors. Some specialized quantum advantage has been demonstrated, but general-purpose quantum computing will require significant advances in error correction and qubit stability.",
    },
  ],
  2: [
    {
      id: "1",
      role: "system",
      content: "You are Claude, an AI assistant by Anthropic.",
    },
    {
      id: "2",
      role: "user",
      content: "Can you explain machine learning in simple terms?",
    },
    {
      id: "3",
      role: "assistant",
      content:
        "Machine learning is like teaching a computer to learn from examples rather than programming it with specific rules. Imagine teaching a child to recognize cats by showing them many pictures of cats, rather than listing all the features of a cat. After seeing enough examples, the child (or computer) can recognize new cats they've never seen before. That's the essence of machine learning - the computer finds patterns in data and uses those patterns to make predictions or decisions about new data.",
    },
  ],
  3: [
    {
      id: "1",
      role: "system",
      content: "You are a helpful and honest assistant.",
    },
    {
      id: "2",
      role: "user",
      content: "What are some good books to read on philosophy?",
    },
    {
      id: "3",
      role: "assistant",
      content:
        "Here are some excellent philosophy books for different levels and interests:\n\n1. For beginners: 'Sophie's World' by Jostein Gaarder - a novel that introduces philosophical concepts through a narrative\n\n2. Classic texts: Plato's 'Republic', Descartes' 'Meditations', or Nietzsche's 'Beyond Good and Evil'\n\n3. Contemporary philosophy: 'Justice' by Michael Sandel or 'The Problems of Philosophy' by Bertrand Russell\n\n4. Eastern philosophy: 'The Tao Te Ching' by Lao Tzu or 'The Heart of the Buddha's Teaching' by Thich Nhat Hanh\n\nWould you like recommendations in any specific area of philosophy?",
    },
  ],
};

const Chatbot = () => {
  const [models, setModels] = useState(initialModels);
  const [activeModelId, setActiveModelId] = useState("1");
  const [conversations, setConversations] = useState(initialConversations);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const addModel = (model) => {
    const id = (models.length + 1).toString();
    const newModel = { ...model, id };
    setModels([...models, newModel]);
    setConversations({
      ...conversations,
      [id]: [{ id: "1", role: "system", content: model.prompt }],
    });
    return id;
  };

  const handleSendMessage = async (message) => {
    const modelId = activeModelId;
    const modelConversation = conversations[modelId] || [];
    const userMessage = {
      id: (modelConversation.length + 1).toString(),
      role: "user",
      content: message,
    };

    setConversations({
      ...conversations,
      [modelId]: [...modelConversation, userMessage],
    });

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const responses = [
        "I understand your question. Let me think about that for a moment...",
        "That's an interesting point. Based on my knowledge, I would say...",
        "Great question! Here's what I know about that topic...",
        "I'd be happy to help with that. The answer depends on several factors...",
      ];
      const aiResponse =
        responses[Math.floor(Math.random() * responses.length)];
      const aiMessage = {
        id: (modelConversation.length + 2).toString(),
        role: "assistant",
        content: aiResponse,
      };

      setConversations({
        ...conversations,
        [modelId]: [...modelConversation, userMessage, aiMessage],
      });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {isMobile ? (
        <MobileNav
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          models={models}
          activeModelId={activeModelId}
          setActiveModelId={setActiveModelId}
          addModel={addModel}
        />
      ) : (
        <div className="w-64 border-r border-border h-full">
          <Sidebar
            models={models}
            activeModelId={activeModelId}
            setActiveModelId={setActiveModelId}
            addModel={addModel}
            isOpen={sidebarOpen}
          />
        </div>
      )}

      <ChatArea
        messages={conversations[activeModelId] || []}
        onSendMessage={handleSendMessage}
        activeModel={models.find((model) => model.id === activeModelId)}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        isMobile={isMobile}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Chatbot;
