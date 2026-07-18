const subjectsData = {
  1: [
    {
      code: 'BE01R00011',
      name: 'Student Induction Program with essence of Indian Knowledge System',
      links: {
        notes: 'https://drive.google.com/drive/folders/1v6SLR0vDaj1FfgjN9SAlYmz66k53jNQ2?usp=drive_link',        // <-- paste link
        youtube: '',
        pyq: '',
        syllabus: 'https://drive.google.com/drive/u/4/folders/1SkXhwlx52RioyFUlR6ipOvo-ncsTEs8C',
        ppts: '',
        books: '',
      }
    },
    {
      code: 'BE01R00021',
      name: 'Physics',
      links: {
        notes: 'https://drive.google.com/drive/folders/1dMvSK9g51em_n8pe4ZheQ82mwLnxQDwk?usp=drive_link',
        youtube: 'https://www.youtube.com/watch?v=3QQWi8Rtaxg&list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame',
        pyq: 'https://drive.google.com/drive/folders/1re5zKiCd42ly5fIGMlMJT6qvB-37BKYH?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/17MZM30nsSJgaDPPy26Z8jbE7kqW-PP4r?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/1ROzAYNHV4psdULX1eT2dpwQ8buPF9-2u?usp=drive_link',
        books: 'https://drive.google.com/drive/folders/16ygcRfs3eYL51Qj2mSWhnXaVvmUIO4EK?usp=drive_link',
      }
    },
    // {
    //   code: 'BE01R00031',
    //   name: 'Chemistry',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'https://drive.google.com/drive/folders/1oVUXaXiP6GcisQR2LtLZlIwpKu5I0UGv?usp=drive_link',
    //     syllabus: 'https://drive.google.com/file/d/19sbu5EE5311rF_fvphvxn7f3-I09xMUY/view?usp=drive_link',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
    {
      code: 'BE01R00041',
      name: 'Mathematics-I',
      links: {
        notes: 'https://drive.google.com/drive/folders/1ykMIn4TVDOrI7fTqm3K6wid_zujS4T30?usp=drive_link',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1eKHqrBCFL-Mw0g8Ehx2OwE3WuqPt1sAJ?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/10824lbW1Ks5jSBDRQRPDYlIpeTaKUxEN?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/10824lbW1Ks5jSBDRQRPDYlIpeTaKUxEN?usp=drive_link',
        books: 'https://drive.google.com/drive/folders/17jo9azrWr0K87mjOcn4wmze9vzaZQbDw?usp=drive_link',
      }
    },
    {
      code: 'BE01R00051',
      name: 'Basic Electrical Engineering',
      links: {
        notes: 'https://drive.google.com/drive/folders/1RDk7yjVfY0VO6vfx-nvdKJGr3t34Q7sw?usp=drive_link',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1dIE2onjvhjspJ5FKjz1d30wffRf-ezeL?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1Mzxxx2BxvZyHVHY8Tpz1kSFDOV2GvFnu?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1uPo5hNFomUrnGM-Gy7TxjP6CR7hOf2ms?usp=drive_link',
      }
    },
    {
      code: 'BE01R00061',
      name: 'Engineering Graphics & Design',
      links: {
        notes: 'https://drive.google.com/drive/folders/1BHjNmJpLRaFdKobGUJ6O-cUPNnAdMe7F?usp=drive_link',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1RDzgnBC47KGjBq7PEliOpKdNABy_hbii?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1RlJ0b-EGYu-jsu4KyxFE9EmrXR_egumw?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/1o6-fWlzNWFqt2m8TOIVIKZsugdykn73j?usp=drive_link',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE01R00071',
      name: 'Design Thinking',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/drive/folders/1zq9ZnHuvFfR88CelxpleauW-lp5s989H?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE01R00081',
      name: 'Basic Mechanical Engineering',
      links: {
        notes: 'https://drive.google.com/drive/folders/1RjD3STd9oURJYXatxPffwhIbPmCq1lMG?usp=drive_link',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/199-f7A5qR6QT4A6uRMGZlOTNfBk1l2xV?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/14r4ucbsw2TiZ9lbbkKN4GQHlsqBY7qy3?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1vGH7wjeHD75T_8Fr3U6LUWeSzqgv-0AH?usp=drive_link',
      }
    },
    {
      code: 'BE01R00111',
      name: 'Basic Electronics Engineering',
      links: {
        notes: 'https://drive.google.com/drive/folders/13At4WsMMK_wKqHuOXctajFeoLekjBARy?usp=drive_link',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1MsL44IUIaZ0tgEhjoVo6ydZl8UyNTWnZ?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1JdwmdNnjWExPq3mncIXA9elIOfQBbWyA?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/14v8BZJJtrWNlsVVo5rMUt4LMp7P08eGz?usp=drive_link',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE01R00121',
      name: 'Programming for Problem Solving',
      links: {
        notes: 'https://drive.google.com/drive/folders/1zlE_2lLk2Of_b4vuz-Z9aEFyjgls443C?usp=drive_link',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1ROk22xDpwwEO5OK8YxO0kONOohcZ2fbg?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1QLtF9RwYYzdsmOJsM_-1jMBn795BV-Ge?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/1TxPLIQ35b_mdrdbPG1UPtxcczgkM9DMe?usp=drive_link',
        books: 'https://drive.google.com/drive/folders/1v--D24zF8BrhjiUwhC7YnuYI8uIPfurj?usp=drive_link',
      }
    },
    {
      code: 'BE01R00141',
      name: 'Universal Human Values',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1sydea0Pn7LWsVkasqCENKmKqQibDYuq4?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1XwaCrvTKMzbhbMRtyOyLXQWMYJlTSofW?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE01R00151',
      name: 'Contributor Personality Development Program',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1-Pp9JgxDpIVn8ZDK4DlV8Brwj17Jg2hJ?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1EEws1gTmglpA5HYODJQAI2yheQunTA-h?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE01R00161',
      name: 'Integrated Personality Development Course',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1HFG6wQnminZ2Kdr35j9gKfCjHrm8_tfI?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1E2wW-An0sSXjJletbfXBnumETInP4cX8?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE01R00181',
      name: 'Digital Fabrication Workshop',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/drive/folders/1fLs7jFug62F6FaG3MJ2r1y0x4JZJlAFm?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
  ],
  2: [
    {
      code: 'BE02R00011',
      name: 'Mathematics-2',
      links: {
        notes: 'https://drive.google.com/drive/folders/1HC-Mgi7muN5aJWi-KGewxtiMTSXksO0Q',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1FQHbFEkigcqz_wIO52j0zxpVGIEdE-IQ',
        syllabus: 'https://drive.google.com/file/d/1k0fzf_-R9vlXGu3vT7T9FfmMT30EKLbz/view?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/1f7rxBrdhPJCYVnx1TeGnvwFxTuILPSHD',
        books: 'https://drive.google.com/drive/folders/1Ugi-EDgNcAfx3B-F4faYRbBNx1kNQSfV',
      }
    },
    {
      code: 'BE02R00021',
      name: 'English for Technical Communication',
      links: {
        notes: 'https://drive.google.com/drive/folders/12DWV8gHnyUgCn5gcb8B3jvlMMfAqDOsO',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1V5O5-mXt7G_VBTazKiG6IEqlT8OP2guA',
        syllabus: 'https://drive.google.com/drive/folders/1xmGcBf3qBiY_6NNJIVg9bKFf7KyOFy3B',
        ppts: 'https://drive.google.com/drive/folders/1syJWk5t5UYezvL1qO-BExHPMGnPWWezd',
        books: 'https://drive.google.com/drive/folders/1dZrRQZIipaXhlO2IeJsNolslOjdSPS-2',
      }
    },
    {
      code: 'BE02R00031',
      name: 'Intellectual Property Rights',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/10I0t_ur0zcCOig7IMR64IvSngnpgdwOI?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1uUoIihct71OKWbbYwHcqbZtNQ51PtaqE',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE02R00041',
      name: 'Fundamental of AI',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1kV1KeOe_lq6004TAYwIhPAyX27krs4qs?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/12V-5QERV5K1hxshgeeCnxxBNxU6Hkf_S',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE02R00061',
      name: 'Industrial Safety and Standards',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1-fPZaSKMinH8uVHJfJJbUFnrDLr-1kH6?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1Va0Jo2mU_DGB_yNSnsw2SxOogPILCV6p',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE02R00071',
      name: 'Standardization and Quality Ecosystem',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/drive/folders/1uZJaEyRXC5bVdCfblSn9AaP8n-08X5m2',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
  ],
  3: [
    {
      code: 'BE03000051',
      name: 'Professional Communication and Ethics',
      links: {
        notes: 'https://drive.google.com/drive/folders/1G6J-5E7kE3Iq6u38J53Y828uH8gnWNJS',
        youtube: 'https://youtube.com/playlist?list=PLrDIldQXhAq-c1-3q8YC2pObBfwaX-73n&si=fQBOugMb7v3bP14H',
        pyq: 'https://drive.google.com/drive/folders/1RvuZCl8RYiY5saMxmjAwJPSdWLPasB4V',
        syllabus: 'https://drive.google.com/drive/folders/1jyfqngNLe-ec012Ecsw2OzYsx7hDMb_q',
        ppts: 'https://drive.google.com/drive/folders/1JAs7mvph3NLRWqy_umhlydW1tD3Lumbe',
        books: 'https://drive.google.com/drive/folders/1xUMjrW5Eb_G0lkucSWOJTfXmdTXxkn7c',
      }
    },
    {
      code: 'BE03000061',
      name: 'Indian Constitution',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/16a9mhtJ4mPV72uvTq-7K9FsibonJgM4d',
        youtube: 'https://youtube.com/playlist?list=PLHptNBxQkiyDJULTmIiMXC29_g2GO9XD1&si=qvAwhPTfDpiX2q9V',
        pyq: 'https://drive.google.com/drive/folders/1jR9FzMPB6Mguu3Voy_ABxJnkv39OqxjQ',
        syllabus: 'https://drive.google.com/drive/folders/1xwvyORLR9KTx3vdoMBCeLrE8AIoIySXQ',
        ppts: 'https://drive.google.com/drive/u/2/folders/1IWFnO-HRYATc9p9zLoXMUBBhVLzmQ8Sf',
        books: 'https://drive.google.com/drive/u/2/folders/1U-Ac1UiwXtj_Y-eQtSE679B4ZMobMZU8',
      }
    },
    {
      code: 'BE03000071',
      name: 'Digital Fundamentals',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1BZFnkJn4wasZrC6UiPCPwaKk-W1oqNkt',
        youtube: 'https://youtube.com/playlist?list=PLftJ4X48yC1n-pyn1z0mJ7enIq9AemaNZ&si=rGfa1actZ8dgFpiv',
        pyq: 'https://drive.google.com/drive/folders/1x9lWctHWLYRYJM2cZJ1pK8w1ULMXyM-q',
        syllabus: 'https://drive.google.com/drive/folders/1P4hUe-JFwwd-9__ObvjQWcI8WiCRobdK',
        ppts: 'https://drive.google.com/drive/u/2/folders/11U71zrEzGhbvFEFLWWYzFEK5LTQod7nn',
        books: 'https://drive.google.com/drive/u/2/folders/1YuKHyqurRSGJSvh_5CNXDMkDcX7XcSru',
      }
    },
    {
      code: 'BE03000081',
      name: 'Data Structures',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/10GrLuEEihHpexWWRcqXgcwcdzEjdnpcZ',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT&si=Pfmr1aIgjv5p4HcH',
        pyq: 'https://drive.google.com/drive/folders/1_9Uq5Pnw5gCX6jVCkueZBwYSCR1N_HeZ',
        syllabus: 'https://drive.google.com/drive/folders/1XykQLD5wcAWVwPmD2FGX1_asxeKTVrbG',
        ppts: 'https://drive.google.com/drive/u/2/folders/1wC5rbv514sNPxSJcdhdqjNXZDnFo2eMl',
        books: 'https://drive.google.com/drive/u/2/folders/1NWXWzF7ARjbVU4ksf4jKMh7jejKoEeQQ',
      }
    },
    {
      code: 'BE03000091',
      name: 'Database Management System',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1fHyHCKmYuG9Xs2LSX-Ra3uHS64mefy6t',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=mi2Va41E2SOe3BW2',
        pyq: 'https://drive.google.com/drive/folders/1YGyKXw3gvSJ3hFEq3I8myKhXgXqiHCZt',
        syllabus: 'https://drive.google.com/drive/folders/1WPdbUedIDWvW6MBByq1ONErkchLxwZIJ',
        ppts: 'https://drive.google.com/drive/u/2/folders/1g3UCYSYRpoEFFIrQ1pYHf2E-0iZEw_pV',
        books: 'https://drive.google.com/drive/u/2/folders/1lJSLMG2N-xdk-Dq60VjL0MXTTssjQvJZ',
      }
    },
    {
      code: 'BE03000241',
      name: 'Indian Knowledge System for Engineering',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1lcAdCF68FMRd0aGomubPRrPBmhPC_fVZ',
        youtube: 'https://youtube.com/playlist?list=PL3Rpv0M8LoOsTFZthZshoH36gRRZTmIf4&si=yJh32085i5-Erno7',
        pyq: 'https://drive.google.com/drive/folders/1Pst0EdWA4GfjhbzM6ALayg3FdjmPkOBu',
        syllabus: 'https://drive.google.com/drive/folders/1UULOFGK-tNIlvludXyPYQ_H5YAyZh3T9',
        ppts: 'https://drive.google.com/drive/u/2/folders/1lcAdCF68FMRd0aGomubPRrPBmhPC_fVZ',
        books: 'https://drive.google.com/drive/u/2/folders/1lcAdCF68FMRd0aGomubPRrPBmhPC_fVZ',
      }
    },
    {
      code: 'BE03000251',
      name: 'Probability and Statistics',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1Z51huAlZLVrfg5ri26BFGw19m9TS9pih',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyHASx368hL9xBYLEXM-nTXA&si=QBB4IYuNvPajRoyN',
        pyq: 'https://drive.google.com/drive/folders/1U3d0yO1DswWFlL-afUkX-SmsNic5zCCa',
        syllabus: 'https://drive.google.com/drive/folders/1l8i9_fprwPVtSCtmZ-iocWW8vL9QbrP9',
        ppts: 'https://drive.google.com/drive/u/2/folders/14O7R-Q_IE_sVhJppGq0K_EKkiqbDBIFN',
        books: 'https://drive.google.com/drive/u/2/folders/1FgNkGxUSG9cl7CmlGufGKLxTqTLXq5i3',
      }
    },
  ],
  4: [
    {
      code: 'BE04000101',
      name: 'Environmental Science, Sustainability and Renewable Energy',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1L5fdY3sz_LdTqdSno5DiBXIkvWdh1W1v?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1h-q8Bg5I_CCRcGtnzPLw-05Lxg0Y2jHv',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE04000221',
      name: 'Operating System',
      links: {
        notes: 'coming-soon',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=5cim8OmQis-ItVxK',
        pyq: 'https://drive.google.com/drive/folders/1RT_hiIJfrC81Kyvr2GZlsOpwZyfsNfcr?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/10DF609egBP_PGjx33up66lejiId6ZJaW?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1claj7E8KjT38GpKK1RsVs-9YCS0rLLvW?usp=drive_link',
      }
    },
    {
      code: 'BE04000231',
      name: 'Object Oriented Programming',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/12feEhVUYML5x0wO82QbyaUHaju5i8k6t?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1BukL7Iw_fFUc2ds0njNl_p2b7vZs-Zac?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1FaAZ903rD5FMy-l_6IMzrRN_CWPv9jck?usp=drive_link',
      }
    },
    {
      code: 'BE04000241',
      name: 'Analysis and Design of Algorithms',
      links: {
        notes: 'https://drive.google.com/drive/folders/1kV7iZ9ywVk8bR5wRo9U4GIgp4Li6ro-Y?usp=drive_link',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&si=Lkd0gukmvmpcSuet',
        pyq: 'https://drive.google.com/drive/folders/1kXfMIyfrJHDdJ0HnNep6sB6sY0y96BK_?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1FNB2hCmOPNeiHrSfWewWgFtjNLv0oF12?usp=drive_link',
        ppts: 'https://drive.google.com/drive/folders/13bI1DNHXq_cquhfawPKH1usLvBIiFZJC?usp=drive_link',
        books: 'https://drive.google.com/drive/folders/1h62YTbmG9u1NA0Sue8R7eyH8isxex3bY?usp=drive_link',
      }
    },
    {
      code: 'BE04000251',
      name: 'Computer Organization & Architecture',
      links: {
        notes: 'coming-soon',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=qI_ts-4jW1S-t3NC',
        pyq: 'https://drive.google.com/drive/folders/1FU7TNOgeUEEtmW3BTKKRQ80kJcjvauNW?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1ch8EopCsqpmB_Npx_5pXNRd-dibQaYkB?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1XosbaxPTQykTInf1RCVWXwKJWXQ8YroB?usp=drive_link',
      }
    },
    {
      code: 'BE04000261',
      name: 'Discrete Mathematics and Graph Theory',
      links: {
        notes: 'coming-soon',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3&si=dbSLONJZiMfHACDa',
        pyq: 'https://drive.google.com/drive/folders/1pndvZm5uKWBDQfpwLmV5tpU7ybDJ3ZpI?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1W8bOjJen6pJrL1sFyftRmvOju1B057kl?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/18K6tIdsjHL7DnfYjzxzB9ndEJ49NJZYE?usp=drive_link',
      }
    },
  ],
  5: [
    {
      code: 'BE05000011',
      name: 'Societal Internship',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/drive/folders/1iTENwQ7g8nYEizweGc6uFDZgrP_DTVta?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000131',
      name: 'Advanced Java Programming',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1Dy_Ff2_WZ88z-SEl_zODKlgA4ystLHPG?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1055yVhiWtdwbhFwt82YzKdC61mYC9uUj?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1xqulPnnNiIP7dJbqdJ-UmsVP7jQJWV4_?usp=drive_link',
      }
    },
    {
      code: 'BE05000171',
      name: 'Computer Networks',
      links: {
        notes: 'https://drive.google.com/drive/folders/1WZdOZ1gIUvUCneKDI-QOIwSAUGDOKaNd',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=2DqEBPwEuh-ro9ZO',
        pyq: 'https://drive.google.com/drive/folders/1t2VY89ag5DzukGdziVCH5zG0JQOllSLS',
        syllabus: 'https://drive.google.com/drive/folders/105bqmAJS0OGXRuJ-d8NtGemBFD9qTna-',
        ppts: 'https://drive.google.com/drive/folders/1vNCeVDImPYfI-MUpQx-JY3sKV9uh6E3a',
        books: 'https://drive.google.com/drive/folders/1cKzYeLwpa28une5WeHGNlW9XpNtf2_Fo',
      }
    },
    {
      code: 'BE05000181',
      name: 'Data Mining Techniques',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1AAhRQ37R6UYPdnlE0NhuWT2Cm68oCv79?usp=drive_link',
        syllabus: 'https://drive.google.com/file/d/10bBEQH2_lLeijc1HXneLb8mdMeb0f51u/view?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1aezwUVj0is6ck6iEXpNgDHtADMSS-_V-?usp=drive_link',
      }
    },
    {
      code: 'BE05000231',
      name: 'Python for Data Science',
      links: {
        notes: 'https://drive.google.com/drive/folders/1fXKEP6LZTkQHRbZd19SD75ixP1-ycJxe',
        youtube: 'coming-soon',
        pyq: 'https://drive.google.com/drive/folders/1M2NhzLLxM_aMHjycfDS8WN-i0Ha7AZH7',
        syllabus: 'https://drive.google.com/drive/folders/1Qxcr5fruBh17Obote_gHA37Sg5JkJbiK',
        ppts: 'https://drive.google.com/drive/folders/1ikH0wo9_4wU70-zDCtgyMUND7TlBep6d',
        books: 'https://drive.google.com/drive/folders/1iedJLq8kiPjZ4L_NlNE2iA2V3MDr6dEC',
      }
    },
    {
      code: 'BE05000261',
      name: 'System Software',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/file/d/1kJyhfIpT7k_4hSwCj25XMJoYTjHJujA0/view?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000281',
      name: 'Web Application Development',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/file/d/1yajW5k6FxJ45Uab0AFv05oRYEgOwB74E/view?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000431',
      name: 'Energy Audit and Management',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000441',
      name: 'Application of Remote Sensing and GIS in Engineering',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000451',
      name: 'Occupational Health & Safety Management',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000471',
      name: 'Oil Hydraulics and Pneumatics',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000481',
      name: 'Project Management',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000491',
      name: 'Introduction to Biomedical Technology',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000501',
      name: 'Instrumentation and Measurement Techniques',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000511',
      name: 'Computer Organization & Architecture',
      links: {
        notes: 'coming-soon',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=qI_ts-4jW1S-t3NC',
        pyq: 'https://drive.google.com/drive/folders/1FU7TNOgeUEEtmW3BTKKRQ80kJcjvauNW?usp=drive_link',
        syllabus: 'https://drive.google.com/drive/folders/1ch8EopCsqpmB_Npx_5pXNRd-dibQaYkB?usp=drive_link',
        ppts: 'coming-soon',
        books: 'https://drive.google.com/drive/folders/1XosbaxPTQykTInf1RCVWXwKJWXQ8YroB?usp=drive_link',
      }
    },
    {
      code: 'BE05000521',
      name: 'Sustainability and Circularity in Textile Industry',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000531',
      name: 'Electronics and Automation in Textile Manufacturing',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000541',
      name: 'Fundamental of Power Electronics',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000551',
      name: 'Microprocessor and Interfacing',
      links: {
        notes: 'coming-soon',
        youtub: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'https://drive.google.com/file/d/1udksF_gIaz8sqR09Gv7_Audhu9FhJncD/view?usp=drive_link',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000561',
      name: 'Sustainable Energy Technology',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    {
      code: 'BE05000571',
      name: 'Sustainable Polymers: Materials, Safety and Circular Economy',
      links: {
        notes: 'coming-soon',
        youtube: 'coming-soon',
        pyq: 'coming-soon',
        syllabus: 'coming-soon',
        ppts: 'coming-soon',
        books: 'coming-soon',
      }
    },
    // {
    //   code: 'MOOC-001',
    //   name: 'MOOC - Business Analytics and Data Mining Modeling using R',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'coming-soon',
    //     syllabus: 'coming-soon',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
    // {
    //   code: 'MOOC-002',
    //   name: 'MOOC - The Joy of Computing using Python',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'coming-soon',
    //     syllabus: 'coming-soon',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
  ],
  6: [
    {
      code: '3160001',
      name: 'Design Engineering II B',
      links: {
        notes: 'https://drive.google.com/drive/folders/1R1E7M7TB-vD7317NciUDd5YfcvniSXYZ',
        youtube: 'https://youtu.be/kReBnWsALDY?si=BbmwxqRyLKikd6xe',
        pyq: '',
        syllabus: 'https://drive.google.com/drive/folders/1m-gSM2eBvqCS0XH7_FcINUPyilHS3k4J',
        ppts: 'https://drive.google.com/drive/folders/1t5waF6Pl5dUYvj5FMIphRJl_bSSCnYHi',
        books: '',
      }
    },
    {
      code: '3160002',
      name: 'Contributor Personality Development Program',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1FMe3S9NYpM-t9ul78ZUcESHZY4Xn4PEq',
        youtube: 'https://drive.google.com/drive/u/2/folders/1xUQgGHmE7pXTdsHBuAot2fvnJPmQ97Ii',
        pyq: 'https://drive.google.com/drive/folders/13Zisuf-SNYjqMvtuFI8bEWTzrbMphBmc',
        syllabus: 'https://drive.google.com/drive/folders/1wFh6SFEQAOVyfFkaGLLGzKzs1tSb4Pjl',
        ppts: 'https://drive.google.com/drive/u/2/folders/1FMe3S9NYpM-t9ul78ZUcESHZY4Xn4PEq',
        books: 'https://drive.google.com/drive/u/2/folders/1FMe3S9NYpM-t9ul78ZUcESHZY4Xn4PEq',
      }
    },
    {
      code: '3160003',
      name: 'Integrated Personality Development Course',
      links: {
        notes: 'https://drive.google.com/drive/folders/1FXOtngVDNeUAFl1SkqOsodMF7NjpltKl',
        youtube: 'https://drive.google.com/drive/u/2/folders/1rqS0GVvfqcaBGFIflQu2NE2-g0CtcDnJ',
        pyq: 'https://drive.google.com/drive/folders/1O-EXdHhUeaVM8gVppyrHxdMsX1xvGf1a',
        syllabus: 'https://drive.google.com/drive/folders/1-RbsxSoJKw0CPut2GJqBu7sG81yaw99z',
        ppts: 'https://drive.google.com/drive/u/2/folders/1qo7rFf-xDTbg2FIn6yOTjrNNSWk1fhLO',
        books: 'https://drive.google.com/drive/u/2/folders/1qo7rFf-xDTbg2FIn6yOTjrNNSWk1fhLO',
      }
    },
    {
      code: '3160704',
      name: 'Theory of Computation',
      links: {
        notes: 'https://drive.google.com/drive/folders/1_lsoceoo1BQTW5b0JC6PuaMGA1Z0HVr3',
        youtube: 'https://drive.google.com/drive/u/2/folders/19jijUITV-K3wm20imhpPxJChDe9qKCiD',
        pyq: 'https://drive.google.com/drive/folders/1-T0DLgHQtxbLY9nOe1lRAzsZZHPqzVQA',
        syllabus: 'https://drive.google.com/drive/folders/1txgpCTIf-FY8oD5QjxV2DRDfWGGRlWps',
        ppts: 'https://drive.google.com/drive/folders/1VwOf54t4qRJGtE9vyLiQVCAh1enn9bpZ',
        books: 'https://drive.google.com/drive/folders/1hHGy4KSiUE53KrCOsciwLl7gE6DFPHt3',
      }
    },
    {
      code: '3160707',
      name: 'Advanced Java Programming',
      links: {
        notes: 'https://drive.google.com/drive/folders/1b8sYKkvHXXIY1zZbyV9UfOIS2RvTkoOh',
        youtube: 'https://drive.google.com/drive/u/2/folders/16J7QKSfxvnfXto06qsXa3lap3Ms74AMq',
        pyq: 'https://drive.google.com/drive/folders/1AbTjYsMTbU04NwBY6X39H_3QoMezo6ri',
        syllabus: 'https://drive.google.com/drive/folders/1LSj7Vlh4qEHjGDaNisjykV15LyavHWjQ',
        ppts: 'https://drive.google.com/drive/folders/1qCiLhZAt7fZkMmmEMbovCfaLaK_7m1Gf',
        books: 'https://drive.google.com/drive/folders/1iWTCcJPdGYRHJ2Dw9j6lYbHaL65RAx64',
      }
    },
    {
      code: '3160712',
      name: 'Microprocessor and Interfacing',
      links: {
        notes: 'https://drive.google.com/drive/folders/1V7eguKOUkvfRNxZcZhqxGacFj7WIzxUI',
        youtube: 'https://drive.google.com/drive/u/2/folders/15G8QRwKDKoS_8DnqmDQ_zCaYg5gu9gu8',
        pyq: 'https://drive.google.com/drive/folders/1DouYRHJ8ra_0QW7gLgKTN0vy_nJVRg-A',
        syllabus: 'https://drive.google.com/drive/folders/1WZmYwuyuxIWrbyj4Jy75gx_yCEBTwXBG',
        ppts: 'https://drive.google.com/drive/folders/1HlO2VfRImCLOy9LOoqtnAeaCtj-rXaEN',
        books: 'https://drive.google.com/drive/u/2/folders/1MeksuPUT7TvmL6-KHHflc7E5FVjQsiQZ',
      }
    },
    {
      code: '3160713',
      name: 'Web Programming',
      links: {
        notes: 'https://drive.google.com/drive/folders/1wZF8UDvKdgfeThsPUEejdwvLhYU18zE_',
        youtube: 'https://drive.google.com/drive/u/2/folders/1bTHhlDb9we_zIFMavb1IowQnvowPsb0y',
        pyq: 'https://drive.google.com/drive/folders/1tSmyZ1m-rQHEIfuPIo9uqcU1HHY5CYeN',
        syllabus: 'https://drive.google.com/drive/folders/1NmfCsNdW1Aa0PRry2P0UYqTPXRUbw5vS',
        ppts: 'https://drive.google.com/drive/folders/17ZPsgt3fmE1s-qUKDcyNsEeQvVNfMuqO',
        books: 'https://drive.google.com/drive/folders/18TPss22uu7avUA4aktt5pcej32KEUVBt',
      }
    },
    {
      code: '3160714',
      name: 'Data Mining',
      links: {
        notes: 'https://drive.google.com/drive/folders/1JBJJQ-9nwuJHujdj9XD5GZ7QwmJfg1Os',
        youtube: 'https://drive.google.com/drive/u/2/folders/1sXEYVcB0oAKTD5dpGMBB0sfOQo1gNjfC',
        pyq: 'https://drive.google.com/drive/folders/1_Zb58UI627yE8eFCbgwjTrVBtm39McBN',
        syllabus: 'https://drive.google.com/drive/folders/1dXSJ5TDrvP8cnFU4PkDzMnEUIbfg3Yaz',
        ppts: 'https://drive.google.com/drive/folders/1-skzJfg5e6JYK9uxDZ2s-SsbjwXXe77n',
        books: 'https://drive.google.com/drive/folders/14tumtDIvJk0GaOU2hx-IngniDZaxXUNc',
      }
    },
    {
      code: '3160715',
      name: 'System Software',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1B52z4TZuoYSWp1kHiGjLW3tP744--SSD',
        youtube: 'https://drive.google.com/drive/u/2/folders/1mmdeGq0lVTqxXiGINtmXZOT4HWJJftaP',
        pyq: 'https://drive.google.com/drive/folders/1Ou0GlHMC2Q37lX9ZNPQ5zjadNqCsoYlZ',
        syllabus: 'https://drive.google.com/drive/folders/1h_UhhZLpbpQtIvg6nhg4WWrxLgZKJaYY',
        ppts: 'https://drive.google.com/drive/u/2/folders/1B52z4TZuoYSWp1kHiGjLW3tP744--SSD',
        books: 'https://drive.google.com/drive/folders/1kJ1J9Bh0Do3lTrJC3k3bfPS0dRKnn6Ra',
      }
    },
    {
      code: '3160716',
      name: 'IOT and Applications',
      links: {
        notes: 'https://drive.google.com/drive/folders/1FCi6rkIZU2B6By2aNqONz-D17UKj4gzu',
        youtube: 'https://drive.google.com/drive/u/2/folders/1zh1B1MbmbaEZ0bh87etzZ56Y-ez7fGxd',
        pyq: 'https://drive.google.com/drive/folders/1fsBKeqBG5FghX_6z59vtkB8IZWhcAeJy',
        syllabus: 'https://drive.google.com/drive/folders/1uDcIxrMpWpncMUHFwqPret63AVvn6Q-y',
        ppts: 'https://drive.google.com/drive/folders/1h7c5WgTphPffMw0F-iG77tRSZWCUrvZP',
        books: 'https://drive.google.com/drive/folders/1R-oHRdb9BeGywyc-V5XKJ_ENSQbAGbME',
      }
    },
    {
      code: '3160717',
      name: 'Data Visualization',
      links: {
        notes: 'https://drive.google.com/drive/folders/1Ifq8XMk9Gzd_ZVyfeuIXqW3-1ZJBULqW',
        youtube: 'https://drive.google.com/drive/u/2/folders/1ObzJdgD0MgO920tvUviDKRosZN0juP-1',
        pyq: 'https://drive.google.com/drive/folders/1Z-5I9-X7e-KQorNakWixTZXDV7zagUuV',
        syllabus: 'https://drive.google.com/drive/folders/1zXe030yDMrVtygwsQFdovfBnW_X_Zku1',
        ppts: 'https://drive.google.com/drive/folders/1HuY9S8jetvkxjGvC5_XiO2dMizE21qyU',
        books: 'https://drive.google.com/drive/folders/1cTQ53sFK5LR_JBbEH2XucVB-_Dbsmx4O',
      }
    },
    // {
    //   code: 'ELEC-001',
    //   name: 'Business Intelligence & Analytics',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'coming-soon',
    //     syllabus: 'coming-soon',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
    // {
    //   code: 'ELEC-002',
    //   name: 'Computer Vision and Image Processing - Fundamentals and Applications',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'coming-soon',
    //     syllabus: 'coming-soon',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
  ],
  7: [
    {
      code: '3170001',
      name: 'Summer Internship',
      links: {
        notes: 'https://drive.google.com/drive/folders/1XP08bd7ifI5uXj69Ozf7b6HxLV_mS9xk',
        youtube: '',
        pyq: '',
        syllabus: 'https://drive.google.com/file/d/1aqTtk3oWZ0cqOAiLYAyMZwmw73J-9zdN/view',
        ppts: '',
        books: '',
      }
    },
    {
      code: '3170701',
      name: 'Compiler Design',
      links: {
        notes: 'https://drive.google.com/drive/folders/13MAhrZdRv50pVVaGaXbw871-cEN_4LH_',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyHfwTqSe7Tce43XwHfLlXU9&si=1u4iOnGn7IQi6OhZ',
        pyq: 'https://drive.google.com/drive/folders/1hiC26z7sE7_9J49z1TadXZhwy1aqQppZ',
        syllabus: 'https://drive.google.com/drive/folders/1rlcKDVJoGDvfQkefZSvkFEZpCPhXcqWt',
        ppts: 'https://drive.google.com/drive/folders/1ri3oh_R6IH-Al8275ATL2MNOZjhizerz',
        books: 'https://drive.google.com/drive/folders/1Uxta2h-wZizsU5u6OiVNe-_OfTpeuvIl',
      }
    },
    {
      code: '3170710',
      name: 'Mobile Computing and Wireless Communication',
      links: {
        notes: 'https://drive.google.com/drive/folders/1fSLTbblnGArTQcxtjB9vVlfgUeEAHb9j',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyGEeaxfWK4yBm4WpsVCKHZD&si=5kVkDaDc6rnFFSov',
        pyq: 'https://drive.google.com/drive/folders/1_HtRYa__INYuNIOUxyJhU5ynT3gzWHgx',
        syllabus: 'https://drive.google.com/drive/folders/1Vl6arlwzmWtWIxTFyI3Kom8Bbd8C6qKQ',
        ppts: 'https://drive.google.com/drive/folders/1JIrWmNb2tX9ZqWqK7yEtpFwql47-x8au',
        books: 'https://drive.google.com/drive/folders/1wY9Vi0-dqJLpZKVrXn1Uy38HnIXhoI0t',
      }
    },
    {
      code: '3170716',
      name: 'Artificial Intelligence',
      links: {
        notes: 'https://drive.google.com/drive/folders/1HmQ9EUnv2g4RNB-YeZ_ClqEl7z4ehS0l',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyF4Kysh2ybeujieSidvXgrG&si=src1XFEAnyZp8B5H',
        pyq: 'https://drive.google.com/drive/folders/1vnUpNjlrcWPTAlHRJoJgpm7QkdIjI0vb',
        syllabus: 'https://drive.google.com/drive/folders/1l8Ph_AIqfB2jofYzrXtsHOAYQE36_d8F',
        ppts: 'https://drive.google.com/drive/folders/1rZMZpKOfg59FIyeL0FzxiI_IALHk4OmB',
        books: 'https://drive.google.com/drive/folders/15_EqMCBAnW3Ub86EkTUwgjeaMcw6-ffw',
      }
    },
    {
      code: '3170717',
      name: 'Cloud Computing',
      links: {
        notes: 'https://drive.google.com/drive/folders/1dioXqD7Lf5C0Xb5AEa-fANF5-BP37zNt',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4&si=DvzsDSL9lcPvDS60',
        pyq: 'https://drive.google.com/drive/folders/1Ow_QvzPNYKBTyji0KlbugbFXrTsT3gp4',
        syllabus: 'https://drive.google.com/drive/folders/1fb0PtVhuXpgMkGWue7M-Y6lu2jxdpCVs',
        ppts: 'https://drive.google.com/drive/u/2/folders/1JKB-pJku0Gfkse8hyJPvuP1-5JsFMJQJ',
        books: 'https://drive.google.com/drive/folders/1ozwTuTRC69kj68UdHSXigZjsbtG9ZQH9',
      }
    },
    {
      code: '3170718',
      name: 'Information Retrieval',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1M7-EssWg4lNPjh27bHs5TYBtIU60b87S',
        youtube: 'https://youtube.com/playlist?list=PLS5J_kYlArq6Z162V_2qRFODkcL6pyS6t&si=DC1gpkYbi2L4naIL',
        pyq: 'https://drive.google.com/drive/folders/1M6Y7Jvl9zyRa8fFT1k4mfJTL07nZuyed',
        syllabus: 'https://drive.google.com/drive/folders/1b0-kXOuSP1NVM9gLoxVxIEzFMgvttti5',
        ppts: 'https://drive.google.com/drive/u/2/folders/1M7-EssWg4lNPjh27bHs5TYBtIU60b87S',
        books: 'https://drive.google.com/drive/folders/1wvD-Sw1LTFPS9XYrs6tnBUhUyqX3xnLc',
      }
    },
    {
      code: '3170719',
      name: 'Distributed System',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1R-dY24M786Nx2e8zNeySSLgjlGUb_tTx',
        youtube: 'https://youtube.com/playlist?list=PLYwpaL_SFmcBYjBnbZdSS9xQ7KrGTxdlY&si=B7WYh7sDLdJL3I5N',
        pyq: 'https://drive.google.com/drive/folders/1IxXMQLd1agr-hPOmvg146I02htCTtYaA',
        syllabus: 'https://drive.google.com/drive/folders/1AkZAYpxt373bUM7E4G-bqBj_YBxzqCIy',
        ppts: 'https://drive.google.com/drive/folders/1I0zvDK5kk2KH97m_LqJpINc6p6DaRAcU',
        books: 'https://drive.google.com/drive/folders/15qq9MvpyvLkLSd1Pt87JflBOdrxHiW4-',
      }
    },
    {
      code: '3170720',
      name: 'Information Security',
      links: {
        notes: 'https://drive.google.com/drive/folders/1evUZcc1-QP5ApHcB5p0z1J9-PJbTB7Id',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyEIiYUvoPXJAxRlq06N21qi&si=Yz_kE8juuKzeieCE',
        pyq: 'https://drive.google.com/drive/folders/1gliYVZubbm8iQKkzMXV6smG1PxExsaGA',
        syllabus: 'https://drive.google.com/drive/folders/1TUvFT2NaF3jC2RCfdyUr0CEk5xR8KerZ',
        ppts: 'https://drive.google.com/drive/u/2/folders/1LRxTSB99D0NCvI6A-pA-Gxz000v9grnv',
        books: 'https://drive.google.com/drive/folders/1sxdTIDkaVjfu5jWR-cglXTTp0R_cr8GY',
      }
    },
    {
      code: '3170721',
      name: 'Parallel and Distributed Computing',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1JQQxQhQPuz_NcrUqqoQ1Ilo-OxXY8YNY',
        youtube: 'https://youtube.com/playlist?list=PL0s3O6GgLL5fbwQ8HBuK0Bh--GZzM8j1M&si=53Gcms3bCuDlZeET',
        pyq: 'https://drive.google.com/drive/folders/1LrQ3rZR8RjEh-KEFB31XCWEoHT28as3P',
        syllabus: 'https://drive.google.com/drive/folders/12JVpqTjLZYQTgd-ckLg1aYq-iCqeFlZy',
        ppts: 'https://drive.google.com/drive/u/2/folders/1JQQxQhQPuz_NcrUqqoQ1Ilo-OxXY8YNY',
        books: 'https://drive.google.com/drive/u/2/folders/1JQQxQhQPuz_NcrUqqoQ1Ilo-OxXY8YNY',
      }
    },
    {
      code: '3170722',
      name: 'Big Data Analytics',
      links: {
        notes: 'https://drive.google.com/drive/folders/1BmBzMCBA7dEC1S-Oh0jjoCPKzzCiWAJw',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyF-uv-F0LEDGnF8jET3aaeu&si=s3PmYeyRuGm7s90A',
        pyq: 'https://drive.google.com/drive/folders/1YAjMgpluMGpbtLdZwnQeOel6Lx8o5gD-',
        syllabus: 'https://drive.google.com/drive/folders/1mdBxixXrkvcIuzc-HFJRpeAmackWSkmX',
        ppts: 'https://drive.google.com/drive/folders/1cf7VZCwK04uL629-DrLfOIVK1B-TE2Ic',
        books: 'https://drive.google.com/drive/folders/17Leezg4JTa-bap5YfPXAYJVEzsb4WxLA',
      }
    },
    {
      code: '3170723',
      name: 'Natural Language Processing',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1Y5nMQVQB8kPZkU7bvGfjGUQK3aydUwRK',
        youtube: 'https://youtu.be/OL435ArVFwE?si=D0PyITCJKspreEUJ',
        pyq: 'https://drive.google.com/drive/folders/1B6ALjyJFHJDZQtkebkBnHjyRdRbCYGvd',
        syllabus: 'https://drive.google.com/drive/folders/1aSv30rgAkEmC-sQmCm2riz6V4X6mGib8',
        ppts: 'https://drive.google.com/drive/u/2/folders/1Y5nMQVQB8kPZkU7bvGfjGUQK3aydUwRK',
        books: 'https://drive.google.com/drive/folders/1zRdo5tLdHBvX2QZJOqF_TlTyUmviQJo9',
      }
    },
    {
      code: '3170724',
      name: 'Machine Learning',
      links: {
        notes: 'https://drive.google.com/drive/folders/1b0IQEjGqFWnBe7D3zfo5UeVRiBzWw8JQ',
        youtube: 'https://youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T&si=oq8LvooQa3OYe9l2',
        pyq: 'https://drive.google.com/drive/folders/1lht-36TMgwhnsOaZy0G5LFum5m51UiG6',
        syllabus: 'https://drive.google.com/drive/folders/1qvfW-mzo5mS6jnygcAT35kxQCUhGAhCb',
        ppts: 'https://drive.google.com/drive/folders/1eZ-Kb3EmZjCwe45eDaI1Kdu_NdEsnrnN',
        books: 'https://drive.google.com/drive/folders/1yN9GPEM4wJbBFhdFanfF1J3-g7JopdiS',
      }
    },
    {
      code: '3170725',
      name: 'Digital Forensics',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/174ZJtMNf8wg6LUbeYdkkFRS0Y47U4yew',
        youtube: 'https://youtube.com/playlist?list=PLa2xctTiNSCiTGuejkc05zsr-G5t9AuH8&si=S1dLWDL6yXWAOrAg',
        pyq: 'https://drive.google.com/drive/folders/1Bdh0RXHS5zOzkK6fzCJhGguCAA1wcQ30',
        syllabus: 'https://drive.google.com/drive/folders/1s6FvxaqJ87HrQskIcJDfHlmgJ5H4FJZf',
        ppts: 'https://drive.google.com/drive/u/2/folders/174ZJtMNf8wg6LUbeYdkkFRS0Y47U4yew',
        books: 'https://drive.google.com/drive/u/2/folders/174ZJtMNf8wg6LUbeYdkkFRS0Y47U4yew',
      }
    },
    {
      code: '3170726',
      name: 'Mobile Application Development',
      links: {
        notes: 'https://drive.google.com/drive/u/2/folders/1fdjleOTuyqCmcPCgDTHurZN4nOCrFttM',
        youtube: 'https://youtube.com/playlist?list=PLNiD0MJqUzyHAJ57jVv_r7mKsbSr9Wgd_&si=r_wiIW7XpkcuFAZn',
        pyq: 'https://drive.google.com/drive/folders/1nbsM3HMlsTTa8j42WiEa-0NdkcIfcL7g',
        syllabus: 'https://drive.google.com/drive/folders/1B45rpTUy-Bfl6JAGybDs9OiVBZkp3Iez',
        ppts: 'https://drive.google.com/drive/folders/1vtTLF-FXQqph87X1DKhnvQ0vAvlrR6yf',
        books: 'https://drive.google.com/drive/folders/1wOT3avoUWREuVHKRipK84Cu8vOi4FA2w',
      }
    },
    // {
    //   code: 'MOOC-003',
    //   name: 'MOOC - Cloud Computing',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'coming-soon',
    //     syllabus: 'coming-soon',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
    // {
    //   code: 'MOOC-004',
    //   name: 'MOOC - Deep Learning - IIT Ropar',
    //   links: {
    //     notes: 'coming-soon',
    //     youtube: 'coming-soon',
    //     pyq: 'coming-soon',
    //     syllabus: 'coming-soon',
    //     ppts: 'coming-soon',
    //     books: 'coming-soon',
    //   }
    // },
  ],
  8: [
    {
      code: '3180701',
      name: 'Internship / Project',
      links: {
        notes: '',
        youtube: '',
        pyq: '',
        syllabus: 'https://drive.google.com/drive/folders/16ShYrtD-s3KtsurTzScN6O4vhdwF8sNo',
        ppts: '',
        books: '',
      }
    },
  ],
};

export default subjectsData;
