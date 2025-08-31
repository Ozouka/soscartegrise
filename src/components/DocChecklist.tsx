'use client';

import { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';

interface DocChecklistProps {
  documents: string[];
}

export default function DocChecklist({ documents }: DocChecklistProps) {
  const [checkedDocs, setCheckedDocs] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  const toggleDoc = (index: number) => {
    const newChecked = new Set(checkedDocs);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedDocs(newChecked);
  };

  const exportList = () => {
    const checkedList = documents
      .filter((_, index) => checkedDocs.has(index))
      .map((doc, index) => `${index + 1}. ${doc}`)
      .join('\n');
    
    const blob = new Blob([checkedList], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'documents-requis.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyList = async () => {
    const checkedList = documents
      .filter((_, index) => checkedDocs.has(index))
      .map((doc, index) => `${index + 1}. ${doc}`)
      .join('\n');
    
    try {
      await navigator.clipboard.writeText(checkedList);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <div>
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <label key={index} className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checkedDocs.has(index)}
              onChange={() => toggleDoc(index)}
              className="w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500 mt-0.5"
            />
            <span className={`text-gray-700 group-hover:text-gray-900 transition-colors ${
              checkedDocs.has(index) ? 'line-through text-gray-500' : ''
            }`}>
              {doc}
            </span>
          </label>
        ))}
      </div>

      {checkedDocs.size > 0 && (
        <div className="mt-6 p-4 bg-sky-50 rounded-xl border border-sky-200">
          <h4 className="font-medium text-sky-900 mb-3">
            Documents cochés ({checkedDocs.size}/{documents.length})
          </h4>
          <div className="flex gap-3">
            <button
              onClick={copyList}
              className="flex items-center gap-2 text-sm text-sky-700 hover:text-sky-800 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? 'Copié !' : 'Copier la liste'}
            </button>
            <button
              onClick={exportList}
              className="flex items-center gap-2 text-sm text-sky-700 hover:text-sky-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
