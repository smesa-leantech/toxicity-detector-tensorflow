import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { examples } from '../enums/examples';

/**
 * Componente que permite seleccionar ejemplos predefinidos de textos para analizar.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {Function} props.setText - Función que actualiza el texto seleccionado en el componente padre
 * @returns {JSX.Element} Un selector desplegable con ejemplos de textos
 *
 * @example
 * <ExampleSelector setText={(text) => setMiTexto(text)} />
 */
export const ExampleSelector = ({ setText }: { setText: (text: string) => void }) => {
  
    return (
      <Select onValueChange={(value) => setText(examples.find(e => e.label === value)?.texto || '')}>
        <SelectTrigger className="bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors">
          <SelectValue placeholder="Selecciona un ejemplo o escribe tu propio texto" />
        </SelectTrigger>
        <SelectContent className="bg-white border-2 border-gray-200">
          {examples.map((example) => (
            <SelectItem 
              key={example.label} 
              value={example.label}
              className="hover:bg-blue-50 transition-colors"
            >
              {example.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };