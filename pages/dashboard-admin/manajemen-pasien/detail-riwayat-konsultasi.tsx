import { Fragment, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavbarLogin from '../../../components/navbar/login';
import Profil from '../../../components/dashboard/profil';
import Sidebar from '../../../components/dashboard/sidebar';
import HasilKonsultasiAdmin from '../../../components/dashboard-admin/manajemen-hasil-konsultasi/adm-hasil-konsultasi';
import DaftarDokterAdmin from '../../../components/dashboard-admin/manajemen-dokter/adm-daftar-dokter';
import Footer from '../../../components/footer/index';
import DetailRiwayatAdmin from '../../../components/dashboard-admin/manajemen-pasien/adm-detail-riwayat-pasien';

export default function RiwayatKonsultasiAdminPage() {
  const [active, setActive] = useState('manajemen-pasien');
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin dashboard />
      </nav>
      <main className="px-4 lg:px-16 mt-28 flex flex-col min-h-screen justify-between">
        <div className="flex justify-start">
          <div className="w-1/9 md:w-1/3">
            <div className="hidden md:block">
              <Profil name="Rani Meliyana Putri" role="admin" />
            </div>
            <Sidebar menu3Show onClickMenu1={() => router.push('/dashboard-admin')} menu1={active === 'manajemen-pasien' && true} title1="manajemen pasien" onClickMenu2={() => setActive('hasil-konsultasi')} menu2={active === 'hasil-konsultasi' && true} title2="manajemen hasil konsultasi" onClickMenu3={() => setActive('manajemen-dokter')} menu3={active === 'manajemen-dokter' && true} title3="manajemen dokter" />
          </div>
          <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
            <div className="flex gap-4 border-2 border-slate-300 w-full p-2 md:p-3 text-xs md:text-base rounded-md">
              <figure>
                <Image src="/icons/search.svg" alt="search" width={20} height={20} />
              </figure>
              <input type="text" placeholder="Pencarian" className="w-full focus:outline-none" />
            </div>
            <div>
              {active === 'manajemen-pasien' && <DetailRiwayatAdmin name="Rani Meliyana Putri" doctor="dr. rani" cat="Umum" keluhan="Batuk, pilek, demam" diagnosa="Pasien terindikasi covid-19. Pasien dirujuk ke rumah sakit x untuk penanganan lebih lanjut." date="12/12/2022" tekanan="156/80" gula="200" />}
              {active === 'hasil-konsultasi' && <HasilKonsultasiAdmin />}
              {active === 'manajemen-dokter' && <DaftarDokterAdmin />}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}