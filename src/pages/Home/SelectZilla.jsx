const SelectZilla = ({ selectedAddress, setSelectedAddress }) => {
  return (
    <select
      value={selectedAddress}
      onChange={(e) => setSelectedAddress(e.target.value)}
      className="w-full px-4 py-3 rounded-md border"
    >
      <option value="All">All</option>
      <option value="Bagerhat">Bagerhat</option>
      <option value="Bandarban">Bandarban</option>
      <option value="Barguna">Barguna</option>
      <option value="Barishal">Barishal</option>
      <option value="Bhola">Bhola</option>
      <option value="Bogra">Bogra</option>
      <option value="Brahmanbaria">Brahmanbaria</option>
      <option value="Chandpur">Chandpur</option>
      <option value="Chapai Nawabganj">Chapai Nawabganj</option>
      <option value="Chattogram">Chattogram</option>
      <option value="Chuadanga">Chuadanga</option>
      <option value="Comilla">Comilla</option>
      <option value="Cox's Bazar">Cox's Bazar</option>
      <option value="Dhaka">Dhaka</option>
      <option value="Dinajpur">Dinajpur</option>
      <option value="Faridpur">Faridpur</option>
      <option value="Feni">Feni</option>
      <option value="Gaibandha">Gaibandha</option>
      <option value="Gazipur">Gazipur</option>
      <option value="Gopalganj">Gopalganj</option>
      <option value="Habiganj">Habiganj</option>
      <option value="Jamalpur">Jamalpur</option>
      <option value="Jashore">Jashore</option>
      <option value="Jhalokati">Jhalokati</option>
      <option value="Jhenaidah">Jhenaidah</option>
      <option value="Joypurhat">Joypurhat</option>
      <option value="Khagrachari">Khagrachari</option>
      <option value="Khulna">Khulna</option>
      <option value="Kishoreganj">Kishoreganj</option>
      <option value="Kurigram">Kurigram</option>
      <option value="Kushtia">Kushtia</option>
      <option value="Lakshmipur">Lakshmipur</option>
      <option value="Lalmonirhat">Lalmonirhat</option>
      <option value="Madaripur">Madaripur</option>
      <option value="Magura">Magura</option>
      <option value="Manikganj">Manikganj</option>
      <option value="Meherpur">Meherpur</option>
      <option value="Moulvibazar">Moulvibazar</option>
      <option value="Munshiganj">Munshiganj</option>
      <option value="Mymensingh">Mymensingh</option>
      <option value="Naogaon">Naogaon</option>
      <option value="Narail">Narail</option>
      <option value="Narayanganj">Narayanganj</option>
      <option value="Narsingdi">Narsingdi</option>
      <option value="Natore">Natore</option>
      <option value="Nawabganj">Nawabganj</option>
      <option value="Netrakona">Netrakona</option>
      <option value="Nilphamari">Nilphamari</option>
      <option value="Noakhali">Noakhali</option>
      <option value="Pabna">Pabna</option>
      <option value="Panchagarh">Panchagarh</option>
      <option value="Patuakhali">Patuakhali</option>
      <option value="Pirojpur">Pirojpur</option>
      <option value="Rajbari">Rajbari</option>
      <option value="Rajshahi">Rajshahi</option>
      <option value="Rangamati">Rangamati</option>
      <option value="Rangpur">Rangpur</option>
      <option value="Satkhira">Satkhira</option>
      <option value="Shariatpur">Shariatpur</option>
      <option value="Sherpur">Sherpur</option>
      <option value="Sirajganj">Sirajganj</option>
      <option value="Sunamganj">Sunamganj</option>
      <option value="Sylhet">Sylhet</option>
      <option value="Tangail">Tangail</option>
      <option value="Thakurgaon">Thakurgaon</option>
    </select>
  );
};

export default SelectZilla;
