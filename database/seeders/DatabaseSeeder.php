<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Payment;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([
            VoyagerDatabaseSeeder::class
        ]);

        $this->seedPaymentMethods();
    }


    private function seedPaymentMethods()
    {
        $crypto = ['ADA', 'AE', 'ARDR', 'ARK', 'BAT', 'BCC', 'BCH', 'BCN', 'BLOCK', 'BNB', 'BNT', 'BTC', 'BTCD', 'BTG', 'BTM', 'BTS', 'CNX', 'CVC', 'DASH', 'DCR', 'DGB', 'DGD', 'DOGE', 'EDG', 'EMC2', 'EOS', 'ETC', 'ETH', 'ETHOS', 'ETP', 'FCT', 'FUN', 'GAME', 'GAS', 'GBYTE', 'GNO', 'GNT', 'GNT', 'GRS', 'GXS', 'HSR', 'ICN', 'IOT', 'KMD', 'KNC', 'LSK', 'LTC', 'MAID', 'MCO', 'MNX', 'MONA', 'MTL', 'NAV', 'NEO', 'NXS', 'NXT', 'OMG', 'PAY', 'PIVX', 'POT', 'POWER', 'PPC', 'PPT', 'PURA', 'QASH', 'QTUM', 'RDN', 'REP', 'SALT', 'SAN', 'SC', 'SKY', 'SNGLS', 'SNT', 'START', 'STEEM', 'STORJ', 'SYS', 'TRX', 'UBQ', 'USDT', 'VEN', 'VTC', 'WAVES', 'WTC', 'XEM', 'XLM', 'XMR', 'XRP', 'XUC', 'XVG', 'XZC', 'ZEC', 'ZEN', 'ZRX'];

        $wallet = ['BOLSTATM', 'PAYEER', 'PAYPAL', 'PM', 'TROPIPAY', 'WM'];

        $banks = ['MLC', 'CUP', 'ZELLE', 'VISA', 'MC'];

        $insert = [];
        foreach ($crypto as $c) {
            array_push($insert, [
                'name' => $c,
                'image' => '/svg/cryptos/' . $c . '.svg',
                'type' => 'CRYPTO',
            ]);
        }
        Payment::query()->insert($insert);

        $insert = [];
        foreach ($wallet as $c) {
            array_push($insert, [
                'name' => $c,
                'image' => '/svg/wallets/' . $c . '.svg',
                'type' => 'WALLET',
            ]);
        }
        Payment::query()->insert($insert);

        $insert = [];
        foreach ($banks as $c) {
            array_push($insert, [
                'name' => $c,
                'image' => '/svg/banks/' . $c . '.svg',
                'type' => 'BANK',
            ]);
        }
        Payment::query()->insert($insert);

        Payment::query()->insert([
            'name' => 'QVAPAY',
            'image' => '/svg/wallets/QVAPAY.png',
            'type' => 'WALLET'
        ]);
    }
}
