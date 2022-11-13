import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data }) => {
    return (
        <div>
            <ReactApexChart
                type="area"
                height={300}
                width='100%'
                series={[
                    {
                        name: "Yes",
                        data: data.percentageList,
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