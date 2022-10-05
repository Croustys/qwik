import {
  component$,
  useClientEffect$,
  useStore,
  useWatch$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const store = useStore({
    value: "",
    debouncedValue: "",
  });
  useWatch$(({ track }) => {
    track(store, "value");
    const id = setTimeout(() => (store.debouncedValue = store.value), 500);
    return () => clearTimeout(id);
  });

  useWatch$(({ track }) => {
    track(store, "debouncedValue");
    const value = store.debouncedValue;
    console.log("fetch db");
  });

  return (
    <div>
      <h1>Test</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={store.value}
          onKeyUp$={(event) =>
            (store.value = (event.target as HTMLInputElement).value)
          }
        />
        <p>{store.value}</p>
        <p>{store.debouncedValue}</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home Page",
};
