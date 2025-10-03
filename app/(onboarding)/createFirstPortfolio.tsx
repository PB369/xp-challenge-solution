import { useUser } from "@/context/UserContex";
import '@/global.css';
import { GEMINI_API_KEY } from "@/utils/geminiKey";
import { portifolioGenerationPrompt } from "@/utils/portifolioGenerationPrompt";
import { MessageType } from "@/utils/types/messagesType";
import { PortfolioType } from "@/utils/types/portifolioType";
import { GoogleGenAI } from "@google/genai";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export default function CreateFirstPortfolio() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [created, setCreated] = useState(false);

  const addPortfolio = (portfolio: PortfolioType) => {
    if (!user) return;
    const updatedPortfolios = [...(user.portfolios || []), portfolio];
    setUser({ ...user, portfolios: updatedPortfolios });
  };

  useEffect(() => {
    const createPortfolio = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const systemMessage: MessageType = {
          role: "model",
          content: portifolioGenerationPrompt(user)
        };

        const userMessage: MessageType = {
          role: "user",
          content: "Crie uma nova carteira de investimentos para mim"
        };

        const messages = [systemMessage, userMessage];

        const aiResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: messages.map(m => ({
            role: m.role,
            parts: [{ text: m.content }],
          })),
        });

        const responseText = aiResponse.text as string;

        try {
          const cleanedResponse = responseText.trim()
            .replace(/^```json\s*/, '')
            .replace(/```$/, '');

          const parsed = JSON.parse(cleanedResponse);

          if (parsed.action === "create_portfolio") {
            const portfolio: PortfolioType = parsed.portfolio;
            addPortfolio(portfolio);
            setCreated(true);

            setTimeout(() => {
              router.replace("/(tabs)");
            }, 3000);
          } else {
            console.warn("IA não retornou action create_portfolio:", parsed);
          }
        } catch (err) {
          console.error("Falha ao parsear resposta da IA:", responseText);
        }

      } catch (error) {
        console.error("Erro ao criar carteira:", error);
      } finally {
        setLoading(false);
      }
    };

    createPortfolio();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-black px-8">
      {loading && !created && (
        <>
          <ActivityIndicator size="large" color="#FFD700" />
          <Text className="text-white mt-4 text-lg text-center">
            Criando sua primeira carteira de investimentos personalizada...
          </Text>
        </>
      )}

      {!loading && created && (
        <Text className="text-white font-semibold text-2xl text-center">
          Sua carteira foi criada! Aproveite esta nova jornada.
        </Text>
      )}
      
      {!loading && !created && (
        <View className="flex-col justify-center items-center w-full">
          <Text className="text-white font-semibold text-2xl text-center bg-red-700 p-4 rounded-md">
            Ops! Ocorreu um erro na criação de sua carteira.
          </Text>
          <Text className="text-white font-semibold text-xl text-center my-16">
            Você poderá tentar criar uma nova carteira com a ajuda do seu assistente de IA.
          </Text>
          <Pressable className="bg-[#FFD700] px-5 py-3 rounded-md" onPress={()=>router.replace("/(tabs)")}>
            <Text className="text-xl font-semibold">Ir para tela inicial</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
