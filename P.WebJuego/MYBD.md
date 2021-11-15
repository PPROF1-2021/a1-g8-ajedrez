USE [juegoTetris]

GO

/****** Object:  Table [dbo].[Detalle_Partida]    Script Date: 3/11/2021 20:30:31 ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO

CREATE TABLE [dbo].[Detalle_Partida](

          [id_Detalle_partida] [int] NOT NULL,

        [partida_ganadas] [int] NULL,

          [partida_perdidas] [int] NULL,

        [id_Usuario] [int] NULL,

        [id_Partida] [int] NULL,

  CONSTRAINT [PK_Detalle_Partida] PRIMARY KEY CLUSTERED

(

          [id_Detalle_partida] ASC

)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF,

  ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY =

OFF) ON [PRIMARY]

) ON [PRIMARY]

GO

/****** Object:  Table [dbo].[pais]    Script Date: 3/11/2021 20:30:32 ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO 
CREATE TABLE [dbo].[pais](

        [id_Pais] [int] NOT NULL,

        [nom_pais] [varchar](50) NOT NULL,

  CONSTRAINT [PK_pais] PRIMARY KEY CLUSTERED

(

        [id_Pais] ASC

)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF,

  ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY =

OFF) ON [PRIMARY]

) ON [PRIMARY]

GO

/****** Object:  Table [dbo].[partida]    Script Date: 3/11/2021 20:30:32 ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO

CREATE TABLE [dbo].[partida](

        [id_Partida] [int] NOT NULL,

        [nivel] [int] NULL,

        [fecha_partida] [date] NULL,

        [puntaje] [int] NULL,

        [linea] [int] NULL,

  CONSTRAINT [PK_partida] PRIMARY KEY CLUSTERED

(

        [id_Partida] ASC

)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF,

  ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY =

OFF) ON [PRIMARY]

) ON [PRIMARY] 
GO

/****** Object:  Table [dbo].[rol_usuario]    Script Date: 3/11/2021 20:30:32 ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO

CREATE TABLE [dbo].[rol_usuario](

        [id_rol] [int] NOT NULL,

        [nom_rol] [varchar](50) NOT NULL,

  CONSTRAINT [PK_rol_usuario] PRIMARY KEY CLUSTERED

(

        [id_rol] ASC

)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF,

  ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY =

OFF) ON [PRIMARY]

) ON [PRIMARY]

GO

/****** Object:  Table [dbo].[usuario]    Script Date: 3/11/2021 20:30:32 ******/

SET ANSI_NULLS ON

GO

SET QUOTED_IDENTIFIER ON

GO

CREATE TABLE [dbo].[usuario](

        [id_Usuario] [int] IDENTITY(1,1) NOT NULL,

        [nom_usuario] [varchar](50) NOT NULL,

        [contraseña] [varchar](50) NOT NULL,

        [nombre] [varchar](50) NOT NULL,

        [apellido] [varchar](50) NOT NULL, 
        [email] [varchar](80) NOT NULL,

        [id_pais] [int] NOT NULL,

        [direccion] [varchar](50) NOT NULL,

        [numero] [real] NOT NULL,

        [telefono] [numeric](18, 0) NOT NULL,

        [id_rol] [int] NOT NULL,

  CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED

(

        [id_Usuario] ASC

)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF,

  ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY =

OFF) ON [PRIMARY]

) ON [PRIMARY]

GO

  ALTER TABLE [dbo].[usuario] SET (LOCK_ESCALATION = AUTO)

GO

INSERT [dbo].[pais] ([id_Pais], [nom_pais]) VALUES (1, N'Argentina')

GO

INSERT [dbo].[pais] ([id_Pais], [nom_pais]) VALUES (2, N'Brasil')

GO

INSERT [dbo].[pais] ([id_Pais], [nom_pais]) VALUES (3, N'Colombia')

GO

INSERT [dbo].[pais] ([id_Pais], [nom_pais]) VALUES (4, N'Uruguay')

GO

INSERT [dbo].[rol_usuario] ([id_rol], [nom_rol]) VALUES (1, N'adminitrador')

GO

INSERT [dbo].[rol_usuario] ([id_rol], [nom_rol]) VALUES (2, N'usuario')

GO 
SET IDENTITY_INSERT [dbo].[usuario] ON

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (1, N'matlopz',

  N'mati123', N'Matias', N'Lopez', N'matlopez10@gmail.com', 1, N'los alemanes', 4145,

  CAST(3518100483 AS Numeric(18, 0)), 1)

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (5, N'maurom',

  N'mau123', N'mauro', N'martinez', N'mauro@gmail.com', 1, N'asdasds', 1454,

  CAST(351515451 AS Numeric(18, 0)), 1)

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (6, N'maurom',

  N'mau123', N'mauro', N'martinez', N'mauro@gmail.com', 1, N'asdasds', 1454,

  CAST(351515451 AS Numeric(18, 0)), 1)

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (7, N'facu', N'mau123',

  N'mauro', N'martinez', N'mauro@gmail.com', 1, N'asdasds', 1454, CAST(351515451 AS

  Numeric(18, 0)), 1)

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (8, N'dolo31', N'dolo12',

N'dolores', N'suarez', N'dolosuarez31@gmail.com', 2, N'asdasds', 333, CAST(351515451 AS

  Numeric(18, 0)), 2)

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (9, N'mariolopez',

  N'mario351', N'mario', N'lopez', N'mariolopez25@gmail.com', 1, N'asdasds', 333,

  CAST(351515451 AS Numeric(18, 0)), 2)

GO

INSERT [dbo].[usuario] ([id_Usuario], [nom_usuario], [contraseña], [nombre], [apellido],

[email], [id_pais], [direccion], [numero], [telefono], [id_rol]) VALUES (11, N'dolo31',

N'dolo12', N'dolores', N'suarez', N'dolosuarez31@gmail.com', 1, N'asdasds', 333,

  CAST(351515451 AS Numeric(18, 0)), 2) 
GO

SET IDENTITY_INSERT [dbo].[usuario] OFF

GO

  ALTER TABLE [dbo].[Detalle_Partida]  WITH CHECK ADD  CONSTRAINT

    [FK_Detalle_Partida_partida] FOREIGN KEY([id_Partida])

  REFERENCES [dbo].[partida] ([id_Partida])

GO

  ALTER TABLE [dbo].[Detalle_Partida] CHECK CONSTRAINT [FK_Detalle_Partida_partida]

GO

  ALTER TABLE [dbo].[Detalle_Partida]  WITH CHECK ADD  CONSTRAINT

  [FK_Detalle_Partida_usuario] FOREIGN KEY([id_Usuario])

  REFERENCES [dbo].[usuario] ([id_Usuario])

GO

  ALTER TABLE [dbo].[Detalle_Partida] CHECK CONSTRAINT [FK_Detalle_Partida_usuario]

GO

  ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_usuario_pais] FOREIGN

  KEY([id_pais])

  REFERENCES [dbo].[pais] ([id_Pais])

GO

  ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_usuario_pais]

GO

  ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_usuario_rol_usuario]

FOREIGN KEY([id_rol])

  REFERENCES [dbo].[rol_usuario] ([id_rol])

GO

  ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_usuario_rol_usuario]

GO



-- entidad principal es la tabla Usuarios 
insert into usuario

            (nom_usuario,contraseña,nombre,apellido,email,id_pais,direccion,numero,telefono,

  id_rol)values

              ('dolo31','dolo12','dolores','suarez','dolosuarez31@gmail.com',1,'asdasds',333,351515451,2)



update usuario set nom_usuario= 'mariolopez', contraseña ='mario351', apellido = 'lopez',

email= 'mariolopez25@gmail.com'

where id_Usuario = 9



delete from usuario

where id_Usuario = 10;



select * from usuario



select nom_usuario, contraseña

from usuario

where nom_usuario like 'juan'and contraseña like '123456'
