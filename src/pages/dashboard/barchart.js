import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data }) => {
    return (
        <div>
            <ReactApexChart
                type="bar"
                height={300}
                width='100%'
                series={[
                    {
                        name: "Female",
                        data: data.fpercentageList,
                        color: "#41B883",
                    },
                    {
                        name: "Male",
                        data: data.mpercentageList,
                        color: '#4576b5',
                    }
                ]}

                options={{
                    chart: {
                        toolbar: {
                            show: false
                        },

                    },
                    title: {
                        text: "Nationalwide Answer to the Question: " + data.question,
                        align: "center"
                    },
                    colors: ['#f90000'],
                    stroke: { width: 1, curve: 'smooth' },
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: data.yearList,
                    },
                    yaxis: {
                        title: {
                            text: "Percentage"
                        },
                        min: 0,
                        max: 1,
                        decimalsInFloat: 3
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    }
                }}

            />
        </div>
    )
}

export default ApexChart

// const barChartOptions = {
//     chart: {
//         type: 'bar',
//         height: 900,
//     },
//     plotOptions: {
//         bar: {
//             borderRadius: 4,
//             horizontal: true,
//         }
//     },
//     title: {
//         text: "Ever told you that you have a form of depression?",
//         align: "center"
//     },
//     dataLabels: {
//         enabled: true
//     },
//     xaxis: {
//         categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
//         // categories: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CZ', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MA', 'ME', 'MD', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
//         // title: {
//         //     text: "States"
//         // },
//     },
//     // yaxis: {
//     //     title: {
//     //         text: "Percentage"
//     //     },
//     // },
//     grid: {
//         show: true
//     }
// };

// const BarChart = (data) => {
//     const theme = useTheme();

//     const { primary, secondary } = theme.palette.text;
//     const info = theme.palette.info.light;

//     const [series] = useState([
//         {
//             name: "Female",
//             data: data.fpercentage
//         },
//         {
//             name: "Male",
//             data: data.mpercentage
//         }
//     ]);

//     const [options, setOptions] = useState(barChartOptions);

//     useEffect(() => {
//         setOptions((prevState) => ({
//             ...prevState,
//             colors: [info],
//             xaxis: {
//                 labels: {
//                     style: {
//                         colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
//                     }
//                 }
//             },
//             tooltip: {
//                 theme: 'light'
//             }
//         }));
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [primary, info, secondary]);

//     return (
//         <div id="chart">
//             <ReactApexChart options={options} series={series}/>
//         </div>
//     );
// };

// export default BarChart;