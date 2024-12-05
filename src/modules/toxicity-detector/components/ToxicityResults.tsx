import { ToxicityEmoji } from "./ToxicityEmoji";

/**
 * Interfaz que define la estructura de un resultado de análisis de toxicidad
 * @interface
 * @property {string} label - Etiqueta que identifica el tipo de toxicidad analizada
 * @property {number} probability - Valor entre 0 y 1 que indica la probabilidad de toxicidad
 */
export interface ToxicityResult {
    label: string;
    probability: number;
}

/**
 * Componente que muestra los resultados del análisis de toxicidad.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {ToxicityResult[]} props.results - Array de resultados del análisis de toxicidad
 * @returns {JSX.Element|null} Un contenedor con los resultados del análisis o null si no hay resultados
 * 
 * @example
 * const results = [
 *   { label: 'toxicity', probability: 0.8 }
 * ];
 * <ToxicityResults results={results} />
 */
export const ToxicityResults = ({ results }: { results: ToxicityResult[] }) => {
    if (results.length === 0) return null;

    return (
        <div className="space-y-6 p-6 bg-white rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 pb-3">Resultados del Análisis</h3>
            <div className="grid gap-6">
                {results.map((result, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-5 bg-gray-50 border-2 border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                    >
                        <span className="text-xl font-semibold text-gray-700">Nivel de toxicidad</span>
                        <div className="flex items-center gap-6">
                            <ToxicityEmoji probability={result.probability} />
                            <span className="text-xl font-bold text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm border-2 border-gray-200">
                                {(result.probability * 100).toFixed(1)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};