import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const apiKey = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result.conversion_rates || {});
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setError(error.message);
            }
        };

        if (currency) {
            fetchCurrencyData();
        }
    }, [currency, apiKey])

    return data;  // directly return conversion rates
}

export default useCurrencyInfo;