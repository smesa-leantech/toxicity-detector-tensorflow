/**
 * Módulo que implementa la pantalla principal del Detector de Toxicidad.
 * Permite analizar textos para detectar niveles de toxicidad usando un modelo de TensorFlow.js
 * 
 * @module ToxicityDetector
 */

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import * as toxicity from '@tensorflow-models/toxicity';
import * as tf from '@tensorflow/tfjs';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ExampleSelector } from '../components/ExampleSelector';
import { ToxicityResult, ToxicityResults } from '../components/ToxicityResults';

/**
 * Componente principal que implementa la pantalla del detector de toxicidad.
 * Gestiona el estado de la aplicación, la carga del modelo y el análisis de toxicidad.
 * 
 * @component
 * @returns {JSX.Element} Pantalla completa del detector de toxicidad
 */
export const ToxicityDetectorScreen = () => {
  // Estados para gestionar texto, resultados, carga, modelo y errores
  const [text, setText] = useState('');
  const [toxicityResults, setToxicityResults] = useState<ToxicityResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<toxicity.ToxicityClassifier | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Efecto que carga el modelo de toxicidad al montar el componente
   */
  useEffect(() => {
    const loadModel = async () => {
      try {
        setLoading(true);
        await tf.ready();
        const threshold = 0.7;
        const model = await toxicity.load(threshold, ['toxicity']);
        setModel(model);
      } catch (err) {
        setError('Error al cargar el modelo de detección de toxicidad');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadModel();
  }, []);

  /**
   * Analiza la toxicidad del texto actual usando el modelo cargado
   * @async
   */
  const analyzeToxicity = async () => {
    if (!model || !text) return;
    
    try {
      setLoading(true);
      const predictions = await model.classify(text);
      
      const results = predictions.map(prediction => ({
        label: prediction.label,
        probability: prediction.results[0].probabilities[1]
      }));
      
      setToxicityResults(results);
      
    } catch (err) {
      setError('Error al analizar la toxicidad del texto');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 border-2">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl p-8">
        <CardTitle className="text-3xl font-extrabold text-center">
          Detector de Toxicidad
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
            <ExampleSelector setText={setText} />
          </div>
          
          <Textarea
            placeholder="Escribe un texto para analizar su nivel de toxicidad..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px] resize-none border-2 focus:border-blue-400 rounded-xl shadow-sm p-4 text-lg"
          />
        </div>
        
        <div className="flex justify-center pt-4">
          <Button
            onClick={analyzeToxicity}
            disabled={loading || !text || !model}
            className="w-full max-w-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                <span>Analizando...</span>
              </>
            ) : (
              'Analizar Toxicidad'
            )}
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="border-2 border-red-500 bg-red-50 rounded-xl">
            <AlertDescription className="text-red-700 font-semibold text-lg">{error}</AlertDescription>
          </Alert>
        )}

        <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
          <ToxicityResults results={toxicityResults} />
        </div>
      </CardContent>
    </Card>
  );
};
