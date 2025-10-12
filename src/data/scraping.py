import json
from datetime import datetime

# Data hasil scraping dari halaman BYD pricelist
byd_vehicles = [
    {
        "nama_mobil": "BYD Seal",
        "url": "/id/car/seal",
        "gambar": {
            "mobil": "https://www.byd.com/content/dam/byd-site/id/pricelist/seal-fix.png",
            "logo": "https://www.byd.com/content/dam/byd-site/id/pricelist/seal-logo-black-new.png"
        },
        "varian": [
            {
                "tipe": "Premium",
                "range_type": "Extended Range",
                "harga": 639000000,
                "harga_formatted": "Rp639.000.000"
            },
            {
                "tipe": "Performance",
                "range_type": "AWD",
                "harga": 750000000,
                "harga_formatted": "Rp750.000.000"
            }
        ],
        "harga_mulai": 639000000,
        "lokasi_otr": "OTR Jakarta (IDR)",
        "tanggal_harga": "4 Februari 2025",
        "spesifikasi": {
            "torsi_maksimum": "360 N.m",
            "daya_maksimum": "230 kW",
            "jarak_mengemudi_nedc": "650 km",
            "kapasitas_baterai": "82.56 kwh",
            "akselerasi_0_100": "5.9 s"
        }
    },
    {
        "nama_mobil": "BYD Atto 3",
        "url": "/id/car/atto3",
        "gambar": {
            "mobil": "https://www.byd.com/content/dam/byd-site/id/pricelist/atto3-white-fix.png",
            "logo": "https://www.byd.com/content/dam/byd-site/id/pricelist/atto3-logo-black-new.png"
        },
        "varian": [
            {
                "tipe": "Advanced-STD",
                "range_type": "Standard Range",
                "harga": 390000000,
                "harga_formatted": "Rp390.000.000"
            },
            {
                "tipe": "Superior",
                "range_type": "Extended Range",
                "harga": 520000000,
                "harga_formatted": "Rp520.000.000"
            }
        ],
        "harga_mulai": 390000000,
        "lokasi_otr": "OTR Jakarta (IDR)",
        "tanggal_harga": "21 Mei 2025",
        "spesifikasi": {
            "torsi_maksimum": "310 N.m",
            "daya_maksimum": "150 kW",
            "jarak_mengemudi_nedc": "410 km",
            "kapasitas_baterai": "49.92 kwh",
            "akselerasi_0_100": "7.9 s"
        }
    },
    {
        "nama_mobil": "BYD Dolphin",
        "url": "/id/car/dolphin",
        "gambar": {
            "mobil": "https://www.byd.com/content/dam/byd-site/id/pricelist/dolphin-fix.png",
            "logo": "https://www.byd.com/content/dam/byd-site/id/pricelist/dolphin-logo-black-new.png"
        },
        "varian": [
            {
                "tipe": "Dynamic",
                "range_type": "Standard Range",
                "harga": 369000000,
                "harga_formatted": "Rp369.000.000"
            },
            {
                "tipe": "Premium",
                "range_type": "Extended Range",
                "harga": 429000000,
                "harga_formatted": "Rp429.000.000"
            }
        ],
        "harga_mulai": 369000000,
        "lokasi_otr": "OTR Jakarta (IDR)",
        "tanggal_harga": "4 Februari 2025",
        "spesifikasi": {
            "torsi_maksimum": "180 N.m",
            "daya_maksimum": "70 kW",
            "jarak_mengemudi_nedc": "410 km",
            "kapasitas_baterai": "44.9 kwh",
            "akselerasi_0_100": "12.3 s"
        }
    },
    {
        "nama_mobil": "BYD M6",
        "url": "/id/car/m6",
        "gambar": {
            "mobil": "https://www.byd.com/content/dam/byd-site/id/pricelist/m6-blue-fix-fixed.png",
            "logo": "https://www.byd.com/content/dam/byd-site/id/pricelist/m6-logo-black-new.png"
        },
        "varian": [
            {
                "tipe": "Standard",
                "range_type": "7 Seater",
                "harga": 383000000,
                "harga_formatted": "Rp383.000.000"
            },
            {
                "tipe": "Superior",
                "range_type": "7 Seater",
                "harga": 423000000,
                "harga_formatted": "Rp423.000.000"
            },
            {
                "tipe": "Superior Captain",
                "range_type": "6 Seater",
                "harga": 433000000,
                "harga_formatted": "Rp433.000.000"
            }
        ],
        "harga_mulai": 383000000,
        "lokasi_otr": "OTR Jakarta (IDR)",
        "tanggal_harga": "4 Februari 2025",
        "spesifikasi": {
            "torsi_maksimum": "310 N.m",
            "daya_maksimum": "120 kW",
            "jarak_mengemudi_nedc": "420 km",
            "kapasitas_baterai": "55.4 kwh",
            "akselerasi_0_100": "10.1 s"
        }
    },
    {
        "nama_mobil": "BYD Sealion 7",
        "url": "/id/car/sealion7",
        "gambar": {
            "mobil": "https://www.byd.com/content/dam/byd-site/id/pricelist/sealion7-2.png",
            "logo": "https://www.byd.com/content/dam/byd-site/id/pricelist/sealion-logo-black.png"
        },
        "varian": [
            {
                "tipe": "Premium",
                "range_type": "5 Seater",
                "harga": 629000000,
                "harga_formatted": "Rp629.000.000"
            },
            {
                "tipe": "Performance",
                "range_type": "5 Seater",
                "harga": 719000000,
                "harga_formatted": "Rp719.000.000"
            }
        ],
        "harga_mulai": 629000000,
        "lokasi_otr": "OTR Jakarta (IDR)",
        "tanggal_harga": "13 Februari 2025",
        "spesifikasi": {
            "torsi_maksimum": "380 N.m",
            "daya_maksimum": "230 kW",
            "jarak_mengemudi_nedc": "567 km",
            "kapasitas_baterai": "82.56 kwh",
            "akselerasi_0_100": "6.7 s"
        }
    },
    {
        "nama_mobil": "BYD Atto 1",
        "url": "/id/car/atto1",
        "varian": [
            {
                "tipe": "Dynamic",
                "range_type": "Standard Range",
                "harga": 195000000,
                "harga_formatted": "Rp195.000.000"
            },
            {
                "tipe": "Premium",
                "range_type": "Long Range",
                "harga": 235000000,
                "harga_formatted": "Rp235.000.000"
            }
        ],
        "harga_mulai": 195000000,
        "lokasi_otr": "OTR Jakarta (IDR)",
        "tanggal_harga": "24 Juli 2025",
        "spesifikasi": {
            "torsi_maksimum": "135 N.m",
            "daya_maksimum": "55 kW",
            "jarak_mengemudi_nedc": "300 km",
            "kapasitas_baterai": "30.08 kwh",
            "akselerasi_0_50": "4.9s"
        }
    }
]

# Simpan ke file JSON
with open('byd_pricelist.json', 'w', encoding='utf-8') as f:
    json.dump(byd_vehicles, f, ensure_ascii=False, indent=2)

# Tampilkan summary
print("=" * 60)
print("HASIL SCRAPING BYD PRICELIST")
print("=" * 60)
print(f"\nTotal model mobil: {len(byd_vehicles)}")
print("\nRingkasan Data:\n")

for vehicle in byd_vehicles:
    print(f"📌 {vehicle['nama_mobil']}")
    print(f"   Harga mulai: {vehicle['harga_mulai']:,}".replace(',', '.'))
    print(f"   Jumlah varian: {len(vehicle['varian'])}")
    print(f"   Jarak tempuh: {vehicle['spesifikasi']['jarak_mengemudi_nedc']}")
    print(f"   Update harga: {vehicle['tanggal_harga']}")
    print()

print("✅ Data telah disimpan ke file: byd_pricelist.json")