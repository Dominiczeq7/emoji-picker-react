import React from 'react';
import { EmojiClickData } from '../types/exposedTypes';
export declare type MutableConfig = {
    onEmojiClick?: (emoji: EmojiClickData, event: MouseEvent) => void;
};
export declare const MutableConfigContext: React.Context<React.MutableRefObject<MutableConfig>>;
export declare function useMutableConfig(): React.MutableRefObject<MutableConfig>;
export declare function useDefineMutableConfig(config: MutableConfig): React.MutableRefObject<MutableConfig>;
