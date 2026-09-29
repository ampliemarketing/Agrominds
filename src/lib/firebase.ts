import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHQD724eGKUGKVrUsJ649ZKgL1jFbu4yQ",
  authDomain: "agromais-db9c5.firebaseapp.com",
  projectId: "agromais-db9c5",
  storageBucket: "agromais-db9c5.firebasestorage.app",
  messagingSenderId: "778526857897",
  appId: "1:778526857897:web:339247497127b4ff5167b8",
  measurementId: "G-Y39GX745CY",
};

// Inicializa o Firebase apenas uma vez (evita erro de duplicidade no Fast Refresh / SSR)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let analytics: Analytics | undefined = undefined;

export const initAnalytics = async (): Promise<Analytics | undefined> => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
      return analytics;
    }
  }
  return undefined;
};

// Inicialização automática no navegador
if (typeof window !== "undefined") {
  initAnalytics();
}

/** Dispara eventos customizados para o Firebase Analytics */
export const logFirebaseEvent = async (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return;
  const inst = analytics || (await initAnalytics());
  if (inst) {
    logEvent(inst, eventName, eventParams);
  }
};

export { app, analytics, firebaseConfig };
