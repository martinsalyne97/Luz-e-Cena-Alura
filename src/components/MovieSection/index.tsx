import styles from './MovieSection.module.css'
import InputText from '../InputText'
import Fieldset from '../FieldSet'
import { FaSearch } from 'react-icons/fa'
import Button from '../Button'
import MovieList from '../MovieList'
import useFetchMovies from '../../hooks/useFetchMovies'
import useFilterMovies from '../../hooks/UseFilterMovies'


const MovieSection = () => {
    const { movies , error , isLoading } = useFetchMovies();
    const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFilterMovies(movies)

    return (
        <main>
            <section className={styles.container}>
                <Fieldset variant='secondary'>
                    <InputText
                        value={searchTerm}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchTerm(event.target.value)}
                        placeholder="Buscar filmes..."
                    />
                    <Button variant='icon' onClick={handleSearch}>
                        <FaSearch />
                    </Button>
                </Fieldset>
                <h1 className={styles.titulo}>Em Cartaz</h1>
                {isLoading && <p>Carregando filmes...</p>}
                {error && <p className={styles.error}>{error}</p>}
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    )
}

export default MovieSection;