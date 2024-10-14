// @ts-expect-error - doesnt exist in types
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});
