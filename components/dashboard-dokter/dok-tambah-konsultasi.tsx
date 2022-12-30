import { Fragment } from 'react';
import Button from './../button/index';
import { useRouter } from 'next/router';

const TambahKonsultasiDokter = (props) => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Tambah Hasil Konsultasi</h3>
        <table className="w-full text-black border-separate border-spacing-y-2">
          <tbody> 
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nama Pasien</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" value={props.name} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base capitalize">
                <input type="text" value={props.doctor} placeholder="Nama Dokter" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Tanggal</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" value={props.date} placeholder="01/01/2022" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Kategori</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base pr-4">
                <select className="focus:outline-none bg-transparent w-full">
                  <option>Umum</option>
                </select>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Keluhan</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" value={props.keluhan} placeholder="Keluhan" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Hasil Diagnosa</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" value={props.diagnosa} placeholder="Diagnosa" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">
                <p>Lainnya</p>
                <p>Tekanan Darah</p>
                <p>Gula Darah Sewaktu</p>
              </td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <p className="invisible">nothing</p>
                <p><input type="text" value={props.tekanan} placeholder="Tekanan darah" className="focus:outline-none bg-transparent w-full"/></p>
                <p><input type="text" value={props.gula} placeholder="Gula darah" className="focus:outline-none bg-transparent w-full"/></p></td> 
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-2 gap-2">
          <div className="w-24 lg:w-48">
            <Button type="btn-outline" title="kembali" onClick={() => router.back()}/>
          </div>
          <div className="w-24 lg:w-48">
            <Button type="btn-normal" title="simpan" onClick={() => router.back()}/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TambahKonsultasiDokter;