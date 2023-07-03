import { ref } from 'vue';
import { IMovie } from './../../resources/interfaces/IMovie';
import { onMounted } from 'vue';
import { tmdb, tmdbPaths } from '../../utils/tmdb';

export default {
  name: 'Browse',
  components: {
  },

  setup () {
    const shows = ref<IMovie[]>([]); 

    onMounted (async () => {
      await tmdb(tmdbPaths.fetchTrending).then(response => response.json())
        .then((data: IMovie[]) => {
          shows.value = data;
        });
    });

    return shows;
  }
}