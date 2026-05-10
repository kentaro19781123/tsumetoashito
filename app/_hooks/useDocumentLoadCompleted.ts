import { useEffect, useState } from "react";

// ページのリソースが完全に読み込まれたことを通知する Hooks
export const useDocumentLoadCompleted = (): boolean => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = () => setIsLoaded(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: loadedのループ回避のため。初回読み込み1度だけ発火させる
  useEffect(() => {
    if (document.readyState === "complete") {
      // loaded();
      return loaded();
    }
    // またページが完全に読み込まれていないので、読み込みが完了したら処理させる
    window.addEventListener("load", loaded);
    return () => {
      window.removeEventListener("load", loaded);
    };
  }, []);

  return isLoaded;
};
