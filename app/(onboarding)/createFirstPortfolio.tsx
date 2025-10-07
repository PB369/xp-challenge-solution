import { useUser } from "@/context/UserContex";
import '@/global.css';
import { contentGenerationPrompt } from "@/utils/contentGenerationPrompt";
import { GEMINI_API_KEY } from "@/utils/geminiKey";
import { EducationalCourseType } from "@/utils/types/educationalCourseType";
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
  const [isPortfolioCreated, setIsPortfolioCreated] = useState(false);
  const [isCourseCreated, setIsCourseCreated] = useState(false);

  const addPortfolio = (portfolio: PortfolioType) => {
    if (!user) return;
    const updatedPortfolios = [...(user.portfolios || []), portfolio];
    setUser({ ...user, portfolios: updatedPortfolios });
  };

  const addEducationalCourse = (educationalCourse: EducationalCourseType) => {
    if(!user) return;
    const updatedEducationalCourses = [...(user.educationalCourses || []), educationalCourse];
    setUser({...user, educationalCourses: updatedEducationalCourses});
  }

  useEffect(() => {
    const generateContent = async (userPrompt: string) => {
      try {
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const systemMessage: MessageType = {
          role: "model",
          content: contentGenerationPrompt(user)
        };

        const userMessage: MessageType = {
          role: "user",
          content: userPrompt
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
            setIsPortfolioCreated(true);

          } else if (parsed.action === "create_course") {
            const educationalCourse: EducationalCourseType = parsed.educationalCourse;
            addEducationalCourse(educationalCourse);
            setIsCourseCreated(true);

            setTimeout(() => {
              router.replace("/(tabs)");
            }, 3000);
          } else {
            console.warn("IA não retornou action:", parsed);
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

    const run = async () => {
      await generateContent("Crie uma carteira de investimentos para mim.");
      await generateContent("Crie um curso para iniciantes em investimentos.");
    };
    run();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-black px-8">
      {loading && !isPortfolioCreated && (
        <>
          <ActivityIndicator size="large" color="#FFD700" />
          <Text className="text-white mt-4 text-lg text-center">
            Criando sua primeira carteira de investimentos personalizada...
          </Text>
        </>
      )}

      {!loading && isPortfolioCreated && isCourseCreated && (
        <Text className="text-white font-semibold text-2xl text-center">
          Sua carteira foi criada! Também estamos te presenteando com um curso bônus. Aproveite esta nova jornada!
        </Text>
      )}
      
      {!loading && !isPortfolioCreated && (
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
