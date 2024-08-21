import {useState} from "react";

interface IUseClipboardProps {
    value: string;
}

interface IUseClipboardReturn {
    isCopied: boolean;
    onCopyClick: () => void;
}

export function useClipboard({ value }: IUseClipboardProps): IUseClipboardReturn {
    const [isCopied, setIsCopied] = useState(false);

    async function onCopyClick() {
        try {
            await navigator.clipboard.writeText(value);
            setIsCopied(true);

            const timer = setTimeout(() => setIsCopied(false), 2000);

            // Очищаем таймер, если компонент размонтируется до завершения таймера
            return () => clearTimeout(timer);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    }

    return { onCopyClick, isCopied };
}
