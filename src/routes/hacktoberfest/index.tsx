import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './flower.css?inline';
import { Link } from '@builder.io/qwik-city';


export default component$(() => {

  return (
    <>
      <Link class="mindblow" href="https://hacktoberfest.com/">
        Read more at Hacktoberfest
      </Link>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Hacktoberfest Link'
}
