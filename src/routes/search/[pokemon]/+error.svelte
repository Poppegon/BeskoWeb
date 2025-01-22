<script>
  import { page } from "$app/stores";
  import {base} from "$app/paths"
</script>

<section>

  <h1>{ "You searched for: " + $page.params.pokemon + "... It doesn´t exist..." }</h1>
  <hr />
  <h2>{ $page.status } { $page.error.message }</h2>
  <a href="{base}/search" class="link">Search for another Pokémon here</a>
</section>

<style>
  h1 {
  font-size: large;
  margin: 10px;
  }

  h2 {
    justify-self: center;
  }

  .link {
    font-weight: 100;
    font-style: oblique;
    color: blue;
    border-width: 2px;
    padding: 5px;
}
</style>