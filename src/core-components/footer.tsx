import { NavLink } from 'react-router';
import Text from '../components/text';

export default function Footer() {
    return(
        <footer className="flex gap-2 items-center justify-center my-10">
        <NavLink to="/"><Text variant="body-sm" className='!text-gray-300'>Tarefas</Text></NavLink>
        <NavLink to="/componentes"><Text variant="body-sm" className='!text-gray-300'>Componentes</Text></NavLink>
    </footer>
    )
}