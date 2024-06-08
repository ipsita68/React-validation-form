import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Index = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    getValues,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    navigate("/success", { state: { formData: data } });
  };

  const citiesByCountry = {
    Afghanistan: ["Kabul", "Kandahar", "Herat"],
    Albania: ["Tirana", "Durrës", "Vlorë"],
    Algeria: ["Algiers", "Oran", "Constantine"],
    Andorra: ["Andorra la Vella", "Escaldes-Engordany", "Encamp"],
    Angola: ["Luanda", "Huambo", "Lobito"],
    "Antigua and Barbuda": ["Saint John's", "All Saints", "Liberta"],
    Argentina: ["Buenos Aires", "Córdoba", "Rosario"],
    Armenia: ["Yerevan", "Gyumri", "Vanadzor"],
    Australia: ["Sydney", "Melbourne", "Brisbane"],
    Austria: ["Vienna", "Graz", "Linz"],
    Azerbaijan: ["Baku", "Ganja", "Sumqayit"],
    Bahamas: ["Nassau", "Freeport", "West End"],
    Bahrain: ["Manama", "Riffa", "Muharraq"],
    Bangladesh: ["Dhaka", "Chittagong", "Khulna"],
    Barbados: ["Bridgetown", "Speightstown", "Oistins"],
    Belarus: ["Minsk", "Gomel", "Mogilev"],
    Belgium: ["Brussels", "Antwerp", "Ghent"],
    Belize: ["Belize City", "Belmopan", "San Ignacio"],
    Benin: ["Cotonou", "Porto-Novo", "Parakou"],
    Bhutan: ["Thimphu", "Phuntsholing", "Punakha"],
    Bolivia: ["La Paz", "Santa Cruz", "Cochabamba"],
    "Bosnia and Herzegovina": ["Sarajevo", "Banja Luka", "Tuzla"],
    Botswana: ["Gaborone", "Francistown", "Maun"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Brasília"],
    Brunei: ["Bandar Seri Begawan", "Kuala Belait", "Seria"],
    Bulgaria: ["Sofia", "Plovdiv", "Varna"],
    "Burkina Faso": ["Ouagadougou", "Bobo-Dioulasso", "Koudougou"],
    Burundi: ["Bujumbura", "Gitega", "Ngozi"],
    "Cabo Verde": ["Praia", "Mindelo", "Santa Maria"],
    Cambodia: ["Phnom Penh", "Siem Reap", "Battambang"],
    Cameroon: ["Yaoundé", "Douala", "Garoua"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    "Central African Republic": ["Bangui", "Bimbo", "Berbérati"],
    Chad: ["N'Djamena", "Moundou", "Sarh"],
    Chile: ["Santiago", "Valparaíso", "Concepción"],
    China: ["Beijing", "Shanghai", "Guangzhou"],
    Colombia: ["Bogotá", "Medellín", "Cali"],
    Comoros: ["Moroni", "Mutsamudu", "Fomboni"],
    "Congo, Democratic Republic of the": [
      "Kinshasa",
      "Lubumbashi",
      "Mbuji-Mayi",
    ],
    "Congo, Republic of the": ["Brazzaville", "Pointe-Noire", "Dolisie"],
    "Costa Rica": ["San José", "Alajuela", "Cartago"],
    Croatia: ["Zagreb", "Split", "Rijeka"],
    Cuba: ["Havana", "Santiago de Cuba", "Camagüey"],
    Cyprus: ["Nicosia", "Limassol", "Larnaca"],
    "Czech Republic": ["Prague", "Brno", "Ostrava"],
    Denmark: ["Copenhagen", "Aarhus", "Odense"],
    Djibouti: ["Djibouti", "Ali Sabieh", "Tadjoura"],
    Dominica: ["Roseau", "Portsmouth", "Marigot"],
    "Dominican Republic": [
      "Santo Domingo",
      "Santiago de los Caballeros",
      "La Romana",
    ],
    Ecuador: ["Quito", "Guayaquil", "Cuenca"],
    Egypt: ["Cairo", "Alexandria", "Giza"],
    "El Salvador": ["San Salvador", "Santa Ana", "San Miguel"],
    "Equatorial Guinea": ["Malabo", "Bata", "Ebebiyín"],
    Eritrea: ["Asmara", "Keren", "Massawa"],
    Estonia: ["Tallinn", "Tartu", "Narva"],
    Eswatini: ["Mbabane", "Manzini", "Big Bend"],
    Ethiopia: ["Addis Ababa", "Dire Dawa", "Mek'ele"],
    Fiji: ["Suva", "Nadi", "Lautoka"],
    Finland: ["Helsinki", "Espoo", "Tampere"],
    France: ["Paris", "Marseille", "Lyon"],
    Gabon: ["Libreville", "Port-Gentil", "Franceville"],
    Gambia: ["Banjul", "Serrekunda", "Brikama"],
    Georgia: ["Tbilisi", "Batumi", "Kutaisi"],
    Germany: ["Berlin", "Munich", "Frankfurt"],
    Ghana: ["Accra", "Kumasi", "Tamale"],
    Greece: ["Athens", "Thessaloniki", "Patras"],
    Grenada: ["St. George's", "Gouyave", "Grenville"],
    Guatemala: ["Guatemala City", "Quetzaltenango", "Escuintla"],
    Guinea: ["Conakry", "Nzérékoré", "Kindia"],
    GuineaBissau: ["Bissau", "Bafatá", "Gabú"],
    Guyana: ["Georgetown", "Linden", "New Amsterdam"],
    Haiti: ["Port-au-Prince", "Cap-Haïtien", "Carrefour"],
    Honduras: ["Tegucigalpa", "San Pedro Sula", "Choloma"],
    Hungary: ["Budapest", "Debrecen", "Szeged"],
    Iceland: ["Reykjavík", "Kópavogur", "Hafnarfjörður"],
    India: [
      "New Delhi",
      "Mumbai",
      "Bangalore",
      "Kolkata",
      "Chennai",
      "Jaipur",
      "Hyderabad",
      "Surat",
      "Ranchi",
      "Jamshedpur"
    ],
    Indonesia: ["Jakarta", "Surabaya", "Bandung"],
    Iran: ["Tehran", "Mashhad", "Isfahan"],
    Iraq: ["Baghdad", "Basra", "Sulaymaniyah"],
    Ireland: ["Dublin", "Cork", "Limerick"],
    Israel: ["Jerusalem", "Tel Aviv", "Haifa"],
    Italy: ["Rome", "Milan", "Naples"],
    Jamaica: ["Kingston", "Montego Bay", "Spanish Town"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Jordan: ["Amman", "Zarqa", "Irbid"],
    Kazakhstan: ["Nur-Sultan", "Almaty", "Shymkent"],
    Kenya: ["Nairobi", "Mombasa", "Kisumu"],
    Kiribati: ["South Tarawa", "Betio", "Bikenibeu"],
    Kosovo: ["Pristina", "Prizren", "Peja"],
    Kuwait: ["Kuwait City", "Farwaniya", "Al Ahmadi"],
    Kyrgyzstan: ["Bishkek", "Osh", "Jalal-Abad"],
    Laos: ["Vientiane", "Pakse", "Savannakhet"],
    Latvia: ["Riga", "Daugavpils", "Liepāja"],
    Lebanon: ["Beirut", "Tripoli", "Sidon"],
    Lesotho: ["Maseru", "Teyateyaneng", "Mafeteng"],
    Liberia: ["Monrovia", "Gbarnga", "Bensonville"],
    Libya: ["Tripoli", "Benghazi", "Misrata"],
    Liechtenstein: ["Vaduz", "Schaan", "Triesenberg"],
    Lithuania: ["Vilnius", "Kaunas", "Klaipėda"],
    Luxembourg: ["Luxembourg City", "Esch-sur-Alzette", "Differdange"],
    Madagascar: ["Antananarivo", "Toamasina", "Antsirabe"],
    Malawi: ["Lilongwe", "Blantyre", "Mzuzu"],
    Malaysia: ["Kuala Lumpur", "George Town", "Ipoh"],
    Maldives: ["Malé", "Addu City", "Fuvahmulah"],
    Mali: ["Bamako", "Sikasso", "Mopti"],
    Malta: ["Valletta", "Birkirkara", "Mosta"],
    "Marshall Islands": ["Majuro", "Kwajalein", "Arno"],
    Mauritania: ["Nouakchott", "Nouadhibou", "Néma"],
    Mauritius: ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix"],
    Mexico: ["Mexico City", "Guadalajara", "Monterrey"],
    Micronesia: ["Palikir", "Weno", "Colonia"],
    Moldova: ["Chișinău", "Tiraspol", "Bălți"],
    Monaco: ["Monaco", "Monte Carlo", "La Condamine"],
    Mongolia: ["Ulaanbaatar", "Erdenet", "Darkhan"],
    Montenegro: ["Podgorica", "Nikšić", "Herceg Novi"],
    Morocco: ["Rabat", "Casablanca", "Fes"],
    Mozambique: ["Maputo", "Matola", "Beira"],
    Myanmar: ["Naypyidaw", "Yangon", "Mandalay"],
    Namibia: ["Windhoek", "Walvis Bay", "Swakopmund"],
    Nauru: ["Yaren", "Denigomodu", "Meneng"],
    Nepal: ["Kathmandu", "Pokhara", "Patan"],
    Netherlands: ["Amsterdam", "Rotterdam", "The Hague"],
    "New Zealand": ["Wellington", "Auckland", "Christchurch"],
    Nicaragua: ["Managua", "León", "Masaya"],
    Niger: ["Niamey", "Zinder", "Tahoua"],
    Nigeria: ["Abuja", "Lagos", "Kano"],
    "North Macedonia": ["Skopje", "Bitola", "Kumanovo"],
    Norway: ["Oslo", "Bergen", "Stavanger"],
    Oman: ["Muscat", "Salalah", "Sohar"],
    Pakistan: ["Islamabad", "Karachi", "Lahore"],
    Palau: ["Ngerulmud", "Koror", "Melekeok"],
    Panama: ["Panama City", "San Miguelito", "Tocumen"],
    "Papua New Guinea": ["Port Moresby", "Lae", "Mount Hagen"],
    Paraguay: ["Asunción", "Ciudad del Este", "San Lorenzo"],
    Peru: ["Lima", "Arequipa", "Trujillo"],
    Philippines: ["Manila", "Quezon City", "Davao City"],
    Poland: ["Warsaw", "Kraków", "Łódź"],
    Portugal: ["Lisbon", "Porto", "Vila Nova de Gaia"],
    Qatar: ["Doha", "Al Wakrah", "Al Rayyan"],
    Romania: ["Bucharest", "Cluj-Napoca", "Timișoara"],
    Russia: ["Moscow", "Saint Petersburg", "Novosibirsk"],
    Rwanda: ["Kigali", "Butare", "Gitarama"],
    "Saint Kitts and Nevis": ["Basseterre", "Charlestown", "Dieppe Bay Town"],
    "Saint Lucia": ["Castries", "Gros Islet", "Vieux Fort"],
    "Saint Vincent and the Grenadines": [
      "Kingstown",
      "Kingstown Park",
      "Georgetown",
    ],
    Samoa: ["Apia", "Vaitele", "Faleula"],
    "San Marino": ["San Marino", "Serravalle", "Borgo Maggiore"],
    "Sao Tome and Principe": ["São Tomé", "Neves", "Guadalupe"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca"],
    Senegal: ["Dakar", "Thiès", "Kaolack"],
    Serbia: ["Belgrade", "Novi Sad", "Niš"],
    Seychelles: ["Victoria", "Anse Boileau", "Beau Vallon"],
    "Sierra Leone": ["Freetown", "Kenema", "Bo"],
    Singapore: ["Singapore"],
    Slovakia: ["Bratislava", "Košice", "Prešov"],
    Slovenia: ["Ljubljana", "Maribor", "Celje"],
    "Solomon Islands": ["Honiara", "Gizo", "Auki"],
    Somalia: ["Mogadishu", "Hargeisa", "Kismayo"],
    "South Africa": ["Pretoria", "Johannesburg", "Cape Town"],
    "South Sudan": ["Juba", "Wau", "Malakal"],
    Spain: ["Madrid", "Barcelona", "Valencia"],
    SriLanka: ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa"],
    Sudan: ["Khartoum", "Omdurman", "Port Sudan"],
    Suriname: ["Paramaribo", "Lelydorp", "Nieuw Nickerie"],
    Sweden: ["Stockholm", "Gothenburg", "Malmö"],
    Switzerland: ["Zurich", "Geneva", "Basel"],
    Syria: ["Damascus", "Aleppo", "Homs"],
    Taiwan: ["Taipei", "New Taipei", "Kaohsiung"],
    Tajikistan: ["Dushanbe", "Khujand", "Kulob"],
    Tanzania: ["Dodoma", "Dar es Salaam", "Mwanza"],
    Thailand: ["Bangkok", "Nonthaburi", "Nakhon Ratchasima"],
    "Timor-Leste": ["Dili", "Maliana", "Suai"],
    Togo: ["Lomé", "Sokodé", "Kara"],
    Tonga: ["Nuku'alofa", "Neiafu", "Haveluloto"],
    "Trinidad and Tobago": ["Port of Spain", "Chaguanas", "San Fernando"],
    Tunisia: ["Tunis", "Sfax", "Sousse"],
    Turkey: ["Ankara", "Istanbul", "Izmir"],
    Turkmenistan: ["Ashgabat", "Turkmenabat", "Daşoguz"],
    Tuvalu: ["Funafuti", "Fongafale", "Vaiaku"],
    Uganda: ["Kampala", "Gulu", "Lira"],
    Ukraine: ["Kyiv", "Kharkiv", "Odesa"],
    "United Arab Emirates": ["Abu Dhabi", "Dubai", "Sharjah"],
    "United Kingdom": ["London", "Birmingham", "Manchester"],
    "United States": ["Washington D.C.", "New York City", "Los Angeles"],
    Uruguay: ["Montevideo", "Salto", "Ciudad de la Costa"],
    Uzbekistan: ["Tashkent", "Namangan", "Samarkand"],
    Vanuatu: ["Port Vila", "Luganville", "Norsup"],
    "Vatican City": ["Vatican City"],
    Venezuela: ["Caracas", "Maracaibo", "Valencia"],
    Vietnam: ["Hanoi", "Ho Chi Minh City", "Da Nang"],
    Yemen: ["Sana'a", "Aden", "Taiz"],
    Zambia: ["Lusaka", "Kitwe", "Ndola"],
    Zimbabwe: ["Harare", "Bulawayo", "Chitungwiza"],
  };

  const handleCountryChange = (e) => {
    setValue("city", ""); // Reset city when country changes
    setValue("country", e.target.value);
  };

  const country = watch("country");
  const renderCityOptions = () => {
    if (!country || !citiesByCountry[country]) {
      return <option value="">Select a city</option>;
    }

    return citiesByCountry[country].map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          {...register("firstName", { required: "First Name is required" })}
          placeholder="Enter your first name"
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
        <label htmlFor="LastName">Last Name:</label>
        <input
          type="text"
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="Enter your last name"
        />
        {errors.LastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}

        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 4,
                message: "Username must be at least 4 characters long",
              },
            })}
            placeholder="Enter username"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            {...register("email", {
              required: "E-mail is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email-id"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              placeholder="Enter password"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i
                className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              ></i>
            </span>
          </div>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="phone-number-container">
          <label htmlFor="phoneNo">Phone Number:</label>
          <PhoneInput
            country={"us"}
            value={getValues("phoneNo")}
            onChange={(phone) => setValue("phoneNo", phone)}
            inputProps={{
              name: "phoneNo",
              required: true,
            }}
          />
          {errors.phoneNo && (
            <p className="error-message">{errors.phoneNo.message}</p>
          )}
        </div>
        <label htmlFor="country">Country:</label>
        <select
          name="country"
          {...register("country", { required: true })}
          onChange={handleCountryChange}
        >
          <option value="">Select a country</option>
          <option value="">Select a country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cabo Verde">Cabo Verde</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Central African Republic">
            Central African Republic
          </option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo, Democratic Republic of the">
            Congo, Democratic Republic of the
          </option>
          <option value="Congo, Republic of the">Congo, Republic of the</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Eswatini">Eswatini</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="Grenada">Grenada</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-Bissau">Guinea-Bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, North">Korea, North</option>
          <option value="Korea, South">Korea, South</option>
          <option value="Kosovo">Kosovo</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Laos">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia">Micronesia</option>
          <option value="Moldova">Moldova</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="North Macedonia">North Macedonia</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Russia">Russia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Vincent and the Grenadines">
            Saint Vincent and the Grenadines
          </option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syria">Syria</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Vatican City">Vatican City</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
          {/* Add more countries here */}
        </select>
        {errors.country && <p className="error-message">Country is required</p>}
        <label htmlFor="city">City:</label>
        <select
          name="city"
          {...register("city", {
            required: getValues("country") !== "",
            validate: (value) =>
              value !== "" || "City is required if country is selected",
          })}
        >
          <option value="">Select a city</option>
          {renderCityOptions()}
        </select>
        {errors.city && <p className="error-message">{errors.city.message}</p>}
        <label htmlFor="panNo">Pan Number:</label>
        <input
          type="text"
          {...register("panNo", {
            required: "Pan No. is required",
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
              message: "Invalid PAN No. format",
            },
          })}
          placeholder="Enter your PAN Number"
        />
        {errors.panNo && (
          <p className="error-message">{errors.panNo.message}</p>
        )}
        <label htmlFor="aadharNo">Aadhar Number:</label>
        <input
          type="text"
          {...register("aadharNo", {
            required: "Aadhar No. is required",
            pattern: {
              value: /^\d{12}$/,
              message: "Invalid Aadhar No. format",
            },
          })}
          placeholder="Enter your Aadhar Number"
        />
        {errors.aadharNo && (
          <p className="error-message">{errors.aadharNo.message}</p>
        )}
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
