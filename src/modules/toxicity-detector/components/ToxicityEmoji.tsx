import { Frown, Meh, Smile } from "lucide-react";

/**
 * Componente que muestra un emoji y texto indicativo según el nivel de toxicidad.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {number} props.probability - Valor entre 0 y 1 que indica la probabilidad de toxicidad
 * @returns {JSX.Element} Un contenedor con un emoji y texto que varía según el nivel de toxicidad:
 * - < 0.33: Emoji sonriente verde con texto "Positivo"
 * - 0.33-0.66: Emoji neutral amarillo con texto "Neutral" 
 * - > 0.66: Emoji triste rojo con texto "Tóxico"
 *
 * @example
 * <ToxicityEmoji probability={0.25} /> // Muestra emoji positivo verde
 * <ToxicityEmoji probability={0.45} /> // Muestra emoji neutral amarillo
 * <ToxicityEmoji probability={0.80} /> // Muestra emoji tóxico rojo
 */
export const ToxicityEmoji = ({ probability }: { probability: number }) => {
    if (probability < 0.33) {
        return (
            <div className="flex items-center gap-3 p-3 bg-green-100 rounded-full shadow-sm hover:shadow-md transition-all">
                <Smile className="w-10 h-10 text-green-500 animate-pulse" />
                <span className="font-semibold text-green-700 text-lg">Positivo</span>
            </div>
        );
    } else if (probability < 0.66) {
        return (
            <div className="flex items-center gap-3 p-3 bg-yellow-100 rounded-full shadow-sm hover:shadow-md transition-all">
                <Meh className="w-10 h-10 text-yellow-500 animate-pulse" />
                <span className="font-semibold text-yellow-700 text-lg">Neutral</span>
            </div>
        );
    } else {
        return (
            <div className="flex items-center gap-3 p-3 bg-red-100 rounded-full shadow-sm hover:shadow-md transition-all">
                <Frown className="w-10 h-10 text-red-500 animate-pulse" />
                <span className="font-semibold text-red-700 text-lg">Tóxico</span>
            </div>
        );
    }
};