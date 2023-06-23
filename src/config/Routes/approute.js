import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TicketsLoading } from '../../components/Pages/Result/tickets_loading';
import { TicketsSoldOut } from '../../components/Pages/Result/tickets_sold_out';
import SearchResult from '../../components/Pages/Result/search_result';
import { SearchResultEmpty } from '../../components/Pages/Result/search_result_empty';
import SearchResultFilter from '../../components/Pages/Result/search_result_filter';
import AboutCompany from '../../components/Pages/Home/about';

const AppRoute = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/loading" element={<TicketsLoading/>} />
            <Route path="/habis" element={<TicketsSoldOut/>} />
            <Route path="/hasil" element={<SearchResult/>} />
            <Route path="/hasil-tidak-ditemukan" element={<SearchResultEmpty/>} />
            <Route path="/hasil-filter" element={<SearchResultFilter/>} />
            <Route path="/about" element={<AboutCompany/>} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;