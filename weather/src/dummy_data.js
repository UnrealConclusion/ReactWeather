/**
 * Dummy Data for the application
 */
const dummy = {
  location: {
    latitude: 40.7525629, 
    longitude: -73.976024,
    location: "New York, NY 10170, USA"
  }, 
  currentForecast: {
    "coord": {
        "lon": -73.9787,
        "lat": 40.7522
    },
    "weather": [
        {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
        },
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.14,
        "feels_like": 296.92,
        "temp_min": 294.72,
        "temp_max": 297.53,
        "pressure": 1011,
        "humidity": 93,
        "sea_level": 1011,
        "grnd_level": 1009
    },
    "visibility": 3219,
    "wind": {
        "speed": 5.14,
        "deg": 350
    },
    "rain": {
        "1h": 2.05
    },
    "clouds": {
        "all": 100
    },
    "dt": 1721270120,
    "sys": {
        "type": 2,
        "id": 2090253,
        "country": "US",
        "sunrise": 1721209156,
        "sunset": 1721262272
    },
    "timezone": -14400,
    "id": 5125125,
    "name": "Long Island City",
    "cod": 200
  },
  forecasts: [
      {
          "dt": 1721271600,
          "main": {
              "temp": 296.14,
              "feels_like": 296.92,
              "temp_min": 296.14,
              "temp_max": 297.08,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1009,
              "humidity": 93,
              "temp_kf": -0.94
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.05,
              "deg": 151,
              "gust": 2.22
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 4.99
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-18 03:00:00"
      },
      {
          "dt": 1721282400,
          "main": {
              "temp": 296.24,
              "feels_like": 296.98,
              "temp_min": 296.24,
              "temp_max": 296.43,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1008,
              "humidity": 91,
              "temp_kf": -0.19
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.01,
              "deg": 287,
              "gust": 3.08
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 0.94
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-18 06:00:00"
      },
      {
          "dt": 1721293200,
          "main": {
              "temp": 295.99,
              "feels_like": 296.63,
              "temp_min": 295.91,
              "temp_max": 295.99,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1009,
              "humidity": 88,
              "temp_kf": 0.08
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 1.89,
              "deg": 262,
              "gust": 3.37
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-18 09:00:00"
      },
      {
          "dt": 1721304000,
          "main": {
              "temp": 297.11,
              "feels_like": 297.34,
              "temp_min": 297.11,
              "temp_max": 297.11,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1010,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 2.19,
              "deg": 303,
              "gust": 3.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-18 12:00:00"
      },
      {
          "dt": 1721314800,
          "main": {
              "temp": 301.74,
              "feels_like": 302.29,
              "temp_min": 301.74,
              "temp_max": 301.74,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1010,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 90
          },
          "wind": {
              "speed": 3,
              "deg": 323,
              "gust": 4.03
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-18 15:00:00"
      },
      {
          "dt": 1721325600,
          "main": {
              "temp": 304.88,
              "feels_like": 304.57,
              "temp_min": 304.88,
              "temp_max": 304.88,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1009,
              "humidity": 37,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 91
          },
          "wind": {
              "speed": 2.8,
              "deg": 298,
              "gust": 3.73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-18 18:00:00"
      },
      {
          "dt": 1721336400,
          "main": {
              "temp": 305.13,
              "feels_like": 304.74,
              "temp_min": 305.13,
              "temp_max": 305.13,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1009,
              "humidity": 36,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 2.57,
              "deg": 246,
              "gust": 3.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-18 21:00:00"
      },
      {
          "dt": 1721347200,
          "main": {
              "temp": 302.68,
              "feels_like": 302.75,
              "temp_min": 302.68,
              "temp_max": 302.68,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1010,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 75
          },
          "wind": {
              "speed": 0.96,
              "deg": 286,
              "gust": 2.7
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-19 00:00:00"
      },
      {
          "dt": 1721358000,
          "main": {
              "temp": 299.43,
              "feels_like": 299.43,
              "temp_min": 299.43,
              "temp_max": 299.43,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1012,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 88
          },
          "wind": {
              "speed": 5.06,
              "deg": 37,
              "gust": 8.97
          },
          "visibility": 10000,
          "pop": 0.23,
          "rain": {
              "3h": 0.13
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-19 03:00:00"
      },
      {
          "dt": 1721368800,
          "main": {
              "temp": 297.54,
              "feels_like": 297.29,
              "temp_min": 297.54,
              "temp_max": 297.54,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 4.33,
              "deg": 23,
              "gust": 7.35
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-19 06:00:00"
      },
      {
          "dt": 1721379600,
          "main": {
              "temp": 295.11,
              "feels_like": 294.77,
              "temp_min": 295.11,
              "temp_max": 295.11,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1015,
              "humidity": 54,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 2
          },
          "wind": {
              "speed": 4.47,
              "deg": 357,
              "gust": 9.29
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-19 09:00:00"
      },
      {
          "dt": 1721390400,
          "main": {
              "temp": 296.1,
              "feels_like": 295.81,
              "temp_min": 296.1,
              "temp_max": 296.1,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 52,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 4.43,
              "deg": 13,
              "gust": 6.66
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-19 12:00:00"
      },
      {
          "dt": 1721401200,
          "main": {
              "temp": 300.9,
              "feels_like": 300.36,
              "temp_min": 300.9,
              "temp_max": 300.9,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 36,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.9,
              "deg": 14,
              "gust": 2.54
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-19 15:00:00"
      },
      {
          "dt": 1721412000,
          "main": {
              "temp": 304.18,
              "feels_like": 303.01,
              "temp_min": 304.18,
              "temp_max": 304.18,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 31,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.64,
              "deg": 215,
              "gust": 3.63
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-19 18:00:00"
      },
      {
          "dt": 1721422800,
          "main": {
              "temp": 302.93,
              "feels_like": 302.19,
              "temp_min": 302.93,
              "temp_max": 302.93,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 36,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 5.5,
              "deg": 170,
              "gust": 5.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-19 21:00:00"
      },
      {
          "dt": 1721433600,
          "main": {
              "temp": 299.33,
              "feels_like": 299.33,
              "temp_min": 299.33,
              "temp_max": 299.33,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 4.92,
              "deg": 165,
              "gust": 6.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-20 00:00:00"
      },
      {
          "dt": 1721444400,
          "main": {
              "temp": 298.6,
              "feels_like": 298.58,
              "temp_min": 298.6,
              "temp_max": 298.6,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1017,
              "humidity": 53,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 2.94,
              "deg": 195,
              "gust": 5.33
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-20 03:00:00"
      },
      {
          "dt": 1721455200,
          "main": {
              "temp": 297.56,
              "feels_like": 297.52,
              "temp_min": 297.56,
              "temp_max": 297.56,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1017,
              "humidity": 56,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 85
          },
          "wind": {
              "speed": 2,
              "deg": 215,
              "gust": 3.54
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-20 06:00:00"
      },
      {
          "dt": 1721466000,
          "main": {
              "temp": 296.45,
              "feels_like": 296.38,
              "temp_min": 296.45,
              "temp_max": 296.45,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1017,
              "humidity": 59,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 1.5,
              "deg": 272,
              "gust": 2.56
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-20 09:00:00"
      },
      {
          "dt": 1721476800,
          "main": {
              "temp": 297.74,
              "feels_like": 297.56,
              "temp_min": 297.74,
              "temp_max": 297.74,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1018,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 88
          },
          "wind": {
              "speed": 0.79,
              "deg": 309,
              "gust": 0.82
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-20 12:00:00"
      },
      {
          "dt": 1721487600,
          "main": {
              "temp": 301.75,
              "feels_like": 301.36,
              "temp_min": 301.75,
              "temp_max": 301.75,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1017,
              "humidity": 40,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 2.08,
              "deg": 211,
              "gust": 2.13
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-20 15:00:00"
      },
      {
          "dt": 1721498400,
          "main": {
              "temp": 303.13,
              "feels_like": 302.82,
              "temp_min": 303.13,
              "temp_max": 303.13,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 40,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.31,
              "deg": 185,
              "gust": 4.73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-20 18:00:00"
      },
      {
          "dt": 1721509200,
          "main": {
              "temp": 302.31,
              "feels_like": 302.77,
              "temp_min": 302.31,
              "temp_max": 302.31,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.47,
              "deg": 184,
              "gust": 6.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-20 21:00:00"
      },
      {
          "dt": 1721520000,
          "main": {
              "temp": 301.46,
              "feels_like": 302.06,
              "temp_min": 301.46,
              "temp_max": 301.46,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 4.31,
              "deg": 235,
              "gust": 5.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-21 00:00:00"
      },
      {
          "dt": 1721530800,
          "main": {
              "temp": 299.28,
              "feels_like": 299.28,
              "temp_min": 299.28,
              "temp_max": 299.28,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1016,
              "humidity": 54,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 2.76,
              "deg": 255,
              "gust": 5.06
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-21 03:00:00"
      },
      {
          "dt": 1721541600,
          "main": {
              "temp": 297.62,
              "feels_like": 297.69,
              "temp_min": 297.62,
              "temp_max": 297.62,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 1.91,
              "deg": 276,
              "gust": 3.82
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-21 06:00:00"
      },
      {
          "dt": 1721552400,
          "main": {
              "temp": 296.74,
              "feels_like": 296.77,
              "temp_min": 296.74,
              "temp_max": 296.74,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.71,
              "deg": 261,
              "gust": 3.03
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-21 09:00:00"
      },
      {
          "dt": 1721563200,
          "main": {
              "temp": 298.26,
              "feels_like": 298.26,
              "temp_min": 298.26,
              "temp_max": 298.26,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 55,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.46,
              "deg": 287,
              "gust": 1.82
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-21 12:00:00"
      },
      {
          "dt": 1721574000,
          "main": {
              "temp": 302.4,
              "feels_like": 302.21,
              "temp_min": 302.4,
              "temp_max": 302.4,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 42,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.21,
              "deg": 226,
              "gust": 2.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-21 15:00:00"
      },
      {
          "dt": 1721584800,
          "main": {
              "temp": 305.2,
              "feels_like": 304.83,
              "temp_min": 305.2,
              "temp_max": 305.2,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 36,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 3.86,
              "deg": 179,
              "gust": 4.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-21 18:00:00"
      },
      {
          "dt": 1721595600,
          "main": {
              "temp": 303.59,
              "feels_like": 303.49,
              "temp_min": 303.59,
              "temp_max": 303.59,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 19
          },
          "wind": {
              "speed": 6.37,
              "deg": 167,
              "gust": 6.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-21 21:00:00"
      },
      {
          "dt": 1721606400,
          "main": {
              "temp": 302.51,
              "feels_like": 302.66,
              "temp_min": 302.51,
              "temp_max": 302.51,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 42
          },
          "wind": {
              "speed": 5.22,
              "deg": 195,
              "gust": 8.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-22 00:00:00"
      },
      {
          "dt": 1721617200,
          "main": {
              "temp": 300.1,
              "feels_like": 301.1,
              "temp_min": 300.1,
              "temp_max": 300.1,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 59,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 53
          },
          "wind": {
              "speed": 3.78,
              "deg": 203,
              "gust": 6.84
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-22 03:00:00"
      },
      {
          "dt": 1721628000,
          "main": {
              "temp": 298.71,
              "feels_like": 298.91,
              "temp_min": 298.71,
              "temp_max": 298.71,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 3.33,
              "deg": 229,
              "gust": 7.07
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-22 06:00:00"
      },
      {
          "dt": 1721638800,
          "main": {
              "temp": 297.81,
              "feels_like": 297.85,
              "temp_min": 297.81,
              "temp_max": 297.81,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 1.82,
              "deg": 254,
              "gust": 3.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-22 09:00:00"
      },
      {
          "dt": 1721649600,
          "main": {
              "temp": 298.91,
              "feels_like": 299.06,
              "temp_min": 298.91,
              "temp_max": 298.91,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1015,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 1.3,
              "deg": 244,
              "gust": 1.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-22 12:00:00"
      },
      {
          "dt": 1721660400,
          "main": {
              "temp": 303.1,
              "feels_like": 304.13,
              "temp_min": 303.1,
              "temp_max": 303.1,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.96,
              "deg": 184,
              "gust": 4.02
          },
          "visibility": 10000,
          "pop": 0.02,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-22 15:00:00"
      },
      {
          "dt": 1721671200,
          "main": {
              "temp": 300.37,
              "feels_like": 301.93,
              "temp_min": 300.37,
              "temp_max": 300.37,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.46,
              "deg": 174,
              "gust": 7.53
          },
          "visibility": 10000,
          "pop": 0.96,
          "rain": {
              "3h": 1.06
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-22 18:00:00"
      },
      {
          "dt": 1721682000,
          "main": {
              "temp": 301.63,
              "feels_like": 302.95,
              "temp_min": 301.63,
              "temp_max": 301.63,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1013,
              "humidity": 57,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 5.29,
              "deg": 202,
              "gust": 6.24
          },
          "visibility": 10000,
          "pop": 0.51,
          "rain": {
              "3h": 0.24
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-22 21:00:00"
      },
      {
          "dt": 1721692800,
          "main": {
              "temp": 299.39,
              "feels_like": 299.39,
              "temp_min": 299.39,
              "temp_max": 299.39,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1014,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 87
          },
          "wind": {
              "speed": 5.08,
              "deg": 168,
              "gust": 6.57
          },
          "visibility": 10000,
          "pop": 0.43,
          "rain": {
              "3h": 0.12
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-23 00:00:00"
      }
  ]
}

export {dummy};