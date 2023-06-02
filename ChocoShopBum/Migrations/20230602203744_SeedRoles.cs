using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChocoShopBum.Migrations
{
    public partial class SeedRoles : Migration
    {
		private string UserRoleId = Guid.NewGuid().ToString();
		private string AdminRoleId = Guid.NewGuid().ToString();

		private string User1Id = Guid.NewGuid().ToString();

		protected override void Up(MigrationBuilder migrationBuilder)
		{
			SeedRolesSQL(migrationBuilder);

			SeedUser(migrationBuilder);

			SeedUserRoles(migrationBuilder);
		}

		private void SeedRolesSQL(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.Sql(@$"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{AdminRoleId}', 'Administrator', 'ADMINISTRATOR', null);");
			migrationBuilder.Sql(@$"INSERT INTO [dbo].[AspNetRoles] ([Id],[Name],[NormalizedName],[ConcurrencyStamp])
            VALUES ('{UserRoleId}', 'User', 'USER', null);");
		}

		private void SeedUser(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.Sql(
				@$"INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [Gender], [CreatedDateTime], [UserName], [NormalizedUserName], 
[Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], 
[PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) 
VALUES 
(N'{User1Id}', N'Admin', N'Admin', 0, '2023-01-01T20:20:20.1234567', N'admin@admin.com', N'ADMIN@ADMIN.COM', 
N'admin@admin.com', N'ADMIN@ADMIN.COM', 0, 
N'AQAAAAEAACcQAAAAEOYW37MeNZhPABBVZNQuQIVuoxPkkrfT8Vg2eGN0/wA0n+vq8dL0HYuERu5IIuJ+vQ==', 
N'BKPP3JGZMTZKIPZK26QG6NIECX4LGKM4', N'500ccc58-1045-4c98-bd00-8f8573852d7e', NULL, 0, 0, NULL, 1, 0)");

		}

		private void SeedUserRoles(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.Sql(@$"
        INSERT INTO [dbo].[AspNetUserRoles]
           ([UserId]
           ,[RoleId])
        VALUES
           ('{User1Id}', '{AdminRoleId}');
        INSERT INTO [dbo].[AspNetUserRoles]
           ([UserId]
           ,[RoleId])
        VALUES
           ('{User1Id}', '{UserRoleId}');");

		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{

		}
	}
}
