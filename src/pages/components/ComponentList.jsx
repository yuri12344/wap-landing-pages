import React, { useState } from 'react';

const ComponentList = ({ components }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = async (name) => {
    const componentPath = `../components/${name}.astro`;
    const Component = (await import(componentPath)).default;
    return <Component />;
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Componentes</h2>
        <ul>
          {components.map((component) => (
            <li className="mb-2" key={component}>
              <button
                className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={() => setSelectedComponent(component.replace('.astro', ''))}
              >
                {component.replace('.astro', '')}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-8">
        {selectedComponent ? (
          <div>{renderComponent(selectedComponent)}</div>
        ) : (
          <p className="text-gray-500">Selecione um componente para visualizar.</p>
        )}
      </div>
    </div>
  );
};

export default ComponentList;