using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace RouteToCode.Domain.Entities
{
    public partial class DBBLOGContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public DBBLOGContext()
        {
        }

        public DBBLOGContext(DbContextOptions<DBBLOGContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        public virtual DbSet<Comment> Comments { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = _configuration.GetConnectionString("DBBLOGContext");
                optionsBuilder.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 23)));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>(entity =>
            {
                entity.Property(e => e.Content)
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedAdt)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.UserName)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Comments_UserId");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(12)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
