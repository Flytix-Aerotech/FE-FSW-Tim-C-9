import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TicketsLoading } from '../../components/Pages/Result/tickets_loading';
import { TicketsSoldOut } from '../../components/Pages/Result/tickets_sold_out';
import { SearchResultEmpty } from '../../components/Pages/Result/search_result_empty';
import SearchResultFilter from '../../components/Pages/Result/search_result_filter';
import AboutCompany from '../../components/Pages/Home/about';
import ResultSearch from '../../components/Pages/Result/search_result';
import DestinationFavorite from '../../components/Pages/Home/destinationvaf';

const AppRoute = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/loading" element={<TicketsLoading/>} />
            <Route path="/habis" element={<TicketsSoldOut/>} />
            <Route path="/hasil" element={<ResultSearch/>} />
            <Route path="/hasil-tidak-ditemukan" element={<SearchResultEmpty/>} />
            <Route path="/hasil-filter" element={<SearchResultFilter/>} />
            <Route path="/about" element={<AboutCompany/>} />
            <Route path="/destinationfav" element={<DestinationFavorite/>} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;