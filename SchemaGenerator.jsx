import React, { useState, useEffect } from 'react';

export default function SchemaGenerator() {
  const [headline, setHeadline] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline
    };
    setOutput(JSON.stringify(schema, null, 2));
  }, [headline]);

  return (
    <div className="app">
      <h1>Schema Markup Generator</h1>
      <input
        placeholder="Enter Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      />
      <pre>{output}</pre>
    </div>
  );
}

