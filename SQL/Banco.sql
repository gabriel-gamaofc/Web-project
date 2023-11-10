CREATE TABLE `cliente` (
  `id` integer PRIMARY KEY,
  `Nome` varchar(255),
  `idade` int,
  `cpf` int UNIQUE,
  `email` varchar(255),
  `Telefone` int,
  `endereco` varchar(255),
  `valor` float NOT NULL,
  `created_at` timestamp
);

CREATE TABLE `financas` (
  `id` integer PRIMARY KEY,
  `semana_1` float NOT NULL,
  `semana_2` float NOT NULL,
  `semana_3` float NOT NULL,
  `Semana_4` float NOT NULL,
  `id_cli` integer NOT NULL,
  `valor_cli` integer
);

ALTER TABLE `financas` ADD FOREIGN KEY (`id_cli`, `valor_cli`) REFERENCES `cliente` (`id`, `valor`);
