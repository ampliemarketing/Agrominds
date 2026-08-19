"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pushDataLayerEvent } from "@/lib/analytics";

type VideoPlayerProps = {
  /** URL do vídeo (mp4 ou embed). Deixe vazio até o arquivo final ser definido. */
  videoUrl?: string;
  posterSrc?: string;
  title: string;
  caption: string;
};

/**
 * Player com thumbnail e botão de play central. Não usa autoplay — o vídeo só
 * carrega e reproduz após o clique do usuário.
 */
export function VideoPlayer({ videoUrl, posterSrc, title, caption }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    setIsPlaying(true);
    pushDataLayerEvent("video_play", { video_title: title });
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
        <div className="relative aspect-video w-full">
          <AnimatePresence initial={false} mode="wait">
            {isPlaying && videoUrl ? (
              <motion.video
                key="video"
                src={videoUrl}
                controls
                autoPlay
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.button
                key="poster"
                type="button"
                onClick={handlePlay}
                aria-label={`Reproduzir vídeo: ${title}`}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {posterSrc ? (
                  <Image src={posterSrc} alt={title} fill className="object-cover" priority />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{
                      background:
                        "repeating-linear-gradient(100deg, #3D6E45 0 42px, #365F3D 42px 84px), linear-gradient(200deg,#2B5533,#101E15)",
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/55 via-green-900/5 to-transparent" />
                <motion.div
                  className="absolute left-1/2 top-1/2 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                  whileHover={{ scale: 1.06 }}
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6.5v11l9-5.5-9-5.5z" fill="#204327" />
                  </svg>
                </motion.div>
                <div className="absolute bottom-5 left-6 text-left text-white">
                  <div className="text-[15px] font-bold">{title}</div>
                  <div className="mt-0.5 text-[13px] text-[#DCEADB]">{caption}</div>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      {!videoUrl && (
        <p className="mt-3 text-center text-xs text-[#9DB59F]">
          [Vídeo profissional do Anderson — arquivo final a inserir]
        </p>
      )}
    </div>
  );
}
